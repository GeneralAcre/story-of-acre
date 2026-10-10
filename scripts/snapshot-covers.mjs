// Records 8 seconds of each project's landing page into public/projectPicture/covers/:
//   <slug>.mp4  short muted loop shown on the cards
//   <slug>.jpg  still frame shown while the video loads (and as its poster)
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
const WIDTH = 1280
const HEIGHT = 960 // 4:3 to match the home tiles; wider covers crop from the top

const root = path.resolve(import.meta.dirname, "..")
const outDir = path.join(root, "public/projectPicture/covers")
const source = fs.readFileSync(path.join(root, "src/constance/work.tsx"), "utf8")

// Same rule as projectSlug() in work.tsx
const slug = (title) => title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

// Pull every `title: "..."` with the `website: "..."` that follows it in the same object
const sites = [...source.matchAll(/title:\s*"([^"]+)"[\s\S]*?website:\s*"([^"]+)"/g)]
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

for (const { title, website, slug: name } of targets) {
  const frames = fs.mkdtempSync(path.join(os.tmpdir(), `cover-${name}-`))
  const page = await browser.newPage()
  await page.setViewport({ width: WIDTH, height: HEIGHT })
  try {
    await page.goto(website, { waitUntil: "networkidle2", timeout: 60000 })

    // Grab frames as fast as the page renders for SECONDS, then encode at the real rate
    let count = 0
    const start = Date.now()
    while (Date.now() - start < SECONDS * 1000) {
      await page.screenshot({ path: path.join(frames, `f${String(count).padStart(4, "0")}.jpg`), type: "jpeg", quality: 80 })
      count++
    }
    const fps = Math.max(1, count / ((Date.now() - start) / 1000))

    fs.copyFileSync(path.join(frames, "f0000.jpg"), path.join(outDir, `${name}.jpg`))
    execFileSync(ffmpegPath, [
      "-y", "-loglevel", "error",
      "-framerate", fps.toFixed(2), "-i", path.join(frames, "f%04d.jpg"),
      "-vf", "scale=640:-2,fps=12", // small and light: 640px wide, 12 fps
      "-c:v", "libx264", "-preset", "slow", "-crf", "30", "-pix_fmt", "yuv420p",
      "-movflags", "+faststart", "-an",
      path.join(outDir, `${name}.mp4`),
    ])
    const kb = Math.round(fs.statSync(path.join(outDir, `${name}.mp4`)).size / 1024)
    console.log(`✓ ${title.padEnd(28)} ${count} frames → covers/${name}.mp4 (${kb} KB)`)
  } catch (err) {
    console.log(`✗ ${title.padEnd(28)} ${String(err).slice(0, 120)}`)
  }
  await page.close()
  fs.rmSync(frames, { recursive: true, force: true })
}

await browser.close()
