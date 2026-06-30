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
  metadataBase: new URL("https://ardhendu-pramanik.vercel.app/"),
  title: "Ardhendu Pramanik — Frontend Engineer (React / Next.js / AI)",
  description:
    "Frontend engineer & full-stack builder, 2+ yrs in Next.js, React & TypeScript. Built CareerLens (RAG resume matching) and Ghost AI, a real-time AI platform.",
  keywords:
    "Frontend Engineer, Full Stack Developer, React 19, Next.js App Router, TypeScript, AI Engineering, RAG, FastAPI, Python, pgvector, LLM, Liveblocks, Trigger.dev, Redux Toolkit, Zod, Prisma, PostgreSQL, Portfolio",
  authors: [{ name: "Ardhendu Pramanik" }],
  openGraph: {
    title: "Ardhendu Pramanik — Frontend Engineer (React / Next.js / AI)",
    description:
      "Building production-grade & AI-native apps with Next.js, React, and TypeScript — including CareerLens (RAG) and Ghost AI (real-time AI collaboration).",
    url: "https://ardhendu-pramanik.vercel.app",
    siteName: "Ardhendu Pramanik",
    type: "website",
    images: [{ url: "/images/AP-1.jpeg" }],
  },
  twitter: {
    card: "summary",
    title: "Ardhendu Pramanik — Frontend Engineer",
    description:
      "AI-native & full-stack engineer building with Next.js, React, TypeScript — creator of CareerLens (RAG) and Ghost AI (real-time AI collaboration).",
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
