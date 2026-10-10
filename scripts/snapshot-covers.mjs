// Captures each project's landing page into public/projectPicture/covers/:
//   <slug>.mp4       8-second muted loop shown on the cards
//   <slug>.jpg       still frame shown while the video loads (and as its poster)
//   <slug>-wide.jpg  high-res still (2x, for retina) for the banner on the project page
// Run after a project site changes:  npm run covers
// Only some projects:                npm run covers -- moment medusa
// Uses your installed Chrome; set CHROME_PATH if it lives somewhere unusual.
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { execFileSync } from "node:child_process"
import puppeteer from "puppeteer-core"
import ffmpegPath from "ffmpeg-static"

const SECONDS = 8
const CARD = { width: 1280, height: 960 } // 4:3 to match the home tiles; wider covers crop from the top
const CARD_VIDEO_WIDTH = 960 // sharp on a ~480px tile at 2x, still light (~100 KB)
const BANNER = { width: 1920, height: 1200, deviceScaleFactor: 2 } // 16:10; the 5:2 desktop banner crops from the top
const SETTLE_MS = 3000 // let intro animations finish before the banner still

const root = path.resolve(import.meta.dirname, "..")
const outDir = path.join(root, "public/projectPicture/covers")
const source = fs.readFileSync(path.join(root, "src/constance/work.tsx"), "utf8")

// Same rule as projectSlug() in work.tsx
const slug = (title) => title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

// Pull every `title: "..."` with the `website: "..."` that follows it in the same object,
// skipping projects that set their own `cover:` picture
const sites = [...source.matchAll(/title:\s*"([^"]+)"[\s\S]*?website:\s*"([^"]+)"/g)]
  .filter(([block]) => !/\bcover:\s*"/.test(block))
  .map(([, title, website]) => ({ title, website, slug: slug(title) }))

const only = process.argv.slice(2)
const targets = only.length ? sites.filter((s) => only.includes(s.slug)) : sites

const chromePath = process.env.CHROME_PATH ?? [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].find((p) => fs.existsSync(p))
if (!chromePath) throw new Error("Chrome not found. Set CHROME_PATH to your Chrome/Edge executable.")

fs.mkdirSync(outDir, { recursive: true })
const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, args: ["--mute-audio", "--no-sandbox"] })

const label = (t) => t.padEnd(28)

for (const { title, website, slug: name } of targets) {
  // ── Card: video loop + poster ──
  const frames = fs.mkdtempSync(path.join(os.tmpdir(), `cover-${name}-`))
  let page = await browser.newPage()
  await page.setViewport(CARD)
  try {
    await page.goto(website, { waitUntil: "networkidle2", timeout: 60000 })

    // Grab frames as fast as the page renders for SECONDS, then encode at the real rate
    let count = 0
    const start = Date.now()
    while (Date.now() - start < SECONDS * 1000) {
      await page.screenshot({ path: path.join(frames, `f${String(count).padStart(4, "0")}.jpg`), type: "jpeg", quality: 90 })
      count++
    }
    const fps = Math.max(1, count / ((Date.now() - start) / 1000))

    fs.copyFileSync(path.join(frames, "f0000.jpg"), path.join(outDir, `${name}.jpg`))
    execFileSync(ffmpegPath, [
      "-y", "-loglevel", "error",
      "-framerate", fps.toFixed(2), "-i", path.join(frames, "f%04d.jpg"),
      "-vf", `scale=${CARD_VIDEO_WIDTH}:-2:flags=lanczos,fps=15`,
      "-c:v", "libx264", "-preset", "slow", "-crf", "24", "-pix_fmt", "yuv420p",
      "-movflags", "+faststart", "-an",
      path.join(outDir, `${name}.mp4`),
    ])
    const kb = Math.round(fs.statSync(path.join(outDir, `${name}.mp4`)).size / 1024)
    console.log(`✓ ${label(title)} card   ${count} frames → covers/${name}.mp4 (${kb} KB)`)
  } catch (err) {
    console.log(`✗ ${label(title)} card   ${String(err).slice(0, 120)}`)
  }
  await page.close()
  fs.rmSync(frames, { recursive: true, force: true })

  // ── Banner: one high-res still ──
  page = await browser.newPage()
  await page.setViewport(BANNER)
  try {
    await page.goto(website, { waitUntil: "networkidle2", timeout: 60000 })
    await new Promise((r) => setTimeout(r, SETTLE_MS))
    const out = path.join(outDir, `${name}-wide.jpg`)
    await page.screenshot({ path: out, type: "jpeg", quality: 90 })
    fs.rmSync(path.join(outDir, `${name}-wide.mp4`), { force: true }) // banners used to be videos
    console.log(`✓ ${label(title)} banner → covers/${name}-wide.jpg (${Math.round(fs.statSync(out).size / 1024)} KB)`)
  } catch (err) {
    console.log(`✗ ${label(title)} banner ${String(err).slice(0, 120)}`)
  }
  await page.close()
}

await browser.close()
