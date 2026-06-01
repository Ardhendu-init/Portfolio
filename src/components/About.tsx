"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

const intro = [
  "I'm a Frontend Engineer with strong full-stack capabilities and 2+ years building and shipping production-grade web applications in Next.js (App Router), React, and TypeScript. I love turning complex requirements into clean, reusable component architectures and fast, reliable user experiences.",
  "Most recently I designed, built, and deployed Ghost AI — an AI-native, real-time collaborative system-design platform — solo and end-to-end: a multiplayer canvas (CRDT-backed Liveblocks + React Flow) paired with durable AI agents that turn natural-language prompts into live architecture diagrams and a persisted technical spec.",
];

const more = [
  "Before that, on a live logistics platform at A2ZPORT, I owned features end-to-end — from frontend architecture to API integration — engineering transport and container-tracking modules that handled 300+ active shipments daily, building a library of 25+ reusable UI components, and optimizing state and caching with Redux Toolkit, React Query, and Zod validation.",
  "I work in a Spec-Driven Development workflow and lean into AI-assisted engineering — Claude for architecture and implementation, CodeRabbit for automated review — to ship faster without compromising quality. My core strengths are reusable component architecture, real-time/distributed state, performance, and clean API design.",
  "Outside of work, I enjoy watching and playing cricket, reading, and reciting poetry. Let's connect and build something great together.",
];

const stats = [
  { value: "2+", label: "Years shipping" },
  { value: "30+", label: "Projects built" },
  { value: "300+", label: "Daily shipments handled" },
  { value: "1", label: "AI platform, solo" },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="01"
          title="About"
          subtitle="A bit about who I am and how I work."
        />

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
          {/* text + stats */}
          <Reveal>
            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="space-y-5 overflow-hidden"
                  >
                    {more.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-soft hover:text-white transition-colors"
            >
              {expanded ? "Show less" : "Read more"}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  expanded ? "rotate-180" : "group-hover:translate-y-0.5"
                }`}
              />
            </button>

            {/* stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-background/60 p-5 text-center sm:text-left"
                >
                  <div className="text-3xl font-semibold text-white">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* photo */}
          <Reveal y={0} delay={0.1} className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line">
              <Image
                src="/images/AP-1.jpeg"
                alt="Ardhendu Pramanik"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top grayscale-[35%] hover:grayscale-0 transition-all duration-700 ease-out"
              />
              {/* violet wash + bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-0 mix-blend-soft-light bg-accent/10 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="eyebrow text-white/90">Ardhendu</span>
                <span className="font-mono text-[0.65rem] text-white/70">
                  Delhi · 2026
                </span>
              </div>
            </div>
            {/* accent frame accent */}
            <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-2xl border border-accent/30" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
