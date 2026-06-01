import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ardhendu.vercel.app"),
  title: "Ardhendu Pramanik — Frontend Engineer (React / Next.js / AI)",
  description:
    "Frontend Engineer with strong full-stack capabilities and 2+ years shipping production-grade apps in Next.js (App Router), React, and TypeScript. Builder of Ghost AI — an AI-native, real-time system-design platform.",
  keywords:
    "Frontend Engineer, Full Stack Developer, React 19, Next.js App Router, TypeScript, AI Engineering, LLM, Liveblocks, Trigger.dev, Redux Toolkit, Zod, Prisma, PostgreSQL, Portfolio",
  authors: [{ name: "Ardhendu Pramanik" }],
  openGraph: {
    title: "Ardhendu Pramanik — Frontend Engineer (React / Next.js / AI)",
    description:
      "Frontend Engineer building production-grade and AI-native web applications with Next.js, React, and TypeScript.",
    url: "https://ardhendu.vercel.app",
    siteName: "Ardhendu Pramanik",
    type: "website",
    images: [{ url: "/images/Ardhendu-Pramanik.png" }],
  },
  twitter: {
    card: "summary",
    title: "Ardhendu Pramanik — Frontend Engineer",
    description:
      "Frontend Engineer building production-grade and AI-native web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
