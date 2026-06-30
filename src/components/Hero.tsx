"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, ArrowDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const RESUME_PATH = "/resume/Ardhendu-Pramanik-Resume.pdf";

const socials = [
  { icon: Github, href: "https://github.com/Ardhendu-init", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ardhendup/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:ardhendujj002@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center text-center pt-28 pb-24"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <div className="w-full max-w-3xl mx-auto px-5 sm:px-8 flex flex-col items-center">
        {/* availability pill */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-line bg-white/[0.03] text-xs text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 animate-pulse-dot" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for frontend / full-stack roles
        </motion.div>

        <motion.p variants={fadeInUp} className="eyebrow text-accent-soft mb-5">
          Frontend Engineer · AI-native builder
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]"
        >
          <span className="gradient-text">Ardhendu Pramanik</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-medium text-white/90 max-w-2xl leading-tight"
        >
          I build production-grade, real-time and{" "}
          <span className="text-accent-soft">AI-native</span> web products.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-base md:text-lg text-muted max-w-2xl leading-relaxed"
        >
          2+ years shipping apps in Next.js (App Router), React, and TypeScript —
          building everything from a 300+ shipment/day logistics platform to
          AI-native products like CareerLens (RAG) and Ghost AI (real-time AI
          collaboration), end-to-end with a Spec-Driven, AI-assisted workflow.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-dim text-white font-medium transition-colors duration-300"
          >
            View Projects
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={RESUME_PATH}
            download="Ardhendu-Pramanik-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line hover:border-accent/60 text-white font-medium transition-colors duration-300"
          >
            Download Resume
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex items-center gap-1 sm:ml-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full text-muted hover:text-white hover:bg-white/5 transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* meta strip */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="text-accent-soft">◇</span> Based in India · Remote
          </span>
          <span className="flex items-center gap-2">
            <span className="text-accent-soft">◇</span> 2+ yrs experience
          </span>
          <span className="flex items-center gap-2">
            <span className="text-accent-soft">◇</span> React · Next.js ·
            TypeScript · AI
          </span>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <span className="eyebrow text-muted/60 text-[0.6rem]">Scroll</span>
        <ArrowDown className="w-4 h-4 text-accent-soft animate-scroll-cue" />
      </div>
    </motion.section>
  );
}
