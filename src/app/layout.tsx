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
  title: "Ardhendu Pramanik - Software Developer Portfolio",
  description:
    "A passionate Software Developer specializing in JavaScript, React, Next.js, Express, Node.js, and Java. B.Tech in Electronics and Communication with extensive experience in web development.",
  keywords:
    "Software Developer, React, Next.js, JavaScript, TypeScript, Node.js, Express.js, Portfolio, Web Development",
  authors: [{ name: "Ardhendu Pramanik" }],
  openGraph: {
    title: "Ardhendu Pramanik - Software Developer Portfolio",
    description:
      "A passionate Software Developer specializing in modern web technologies",
    type: "website",
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
