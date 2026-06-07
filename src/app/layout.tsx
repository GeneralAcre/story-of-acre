import type { Metadata } from "next";
import { Geist, Geist_Mono, Kdam_Thmor_Pro } from "next/font/google";
import "./globals.css";
import ClientShell from "./ClientShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kdam = Kdam_Thmor_Pro({
  variable: "--font-kdam-next",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Acre — Frontend Developer",
  description: "Frontend developer exploring the power of blockchain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${kdam.variable}`}>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
