"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

type ProjectLink = { label: string; href: string; variant: "live" | "code" };

type Project = {
  title: string;
  year: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Ghost AI — AI-Native Real-Time System-Design Platform",
    year: "2026",
    description:
      "A multiplayer workspace where an AI agent turns natural-language prompts into live architecture diagrams and compiles the graph into a persisted Markdown technical spec. Built solo, end-to-end: real-time, conflict-free collaboration with live cursors on CRDT-backed Liveblocks + React Flow, durable Trigger.dev LLM background tasks with retries and SHA-256 idempotency, and a two-tier PostgreSQL + Vercel Blob storage model across 11 secured API routes.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Liveblocks (CRDT)",
      "React Flow",
      "Trigger.dev",
      "OpenRouter (LLM)",
      "Prisma",
      "PostgreSQL",
      "Clerk",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://ghost-ai-vert-two.vercel.app",
        variant: "live",
      },
    ],
    featured: true,
  },
  {
    title: "Transport Management System — A2ZPORT",
    year: "2024-2025",
    description:
      "Dispatch-workflow modules with dynamic, Zod-validated forms; a modular component architecture scaled the team from 3 → 8 developers with minimal refactoring. A scalable Prisma + Supabase data flow with production-grade handling of concurrency and data integrity, plus role-based access and reusable form/table primitives.",
    tags: ["Next.js", "Supabase", "Prisma", "Redux", "Tailwind", "Zod"],
    links: [
      {
        label: "Internal Product",
        href: "https://beta-tms.netlify.app",
        variant: "live",
      },
    ],
  },
  {
    title: "IVCA — The Internet Folks",
    year: "2023",
    description:
      "Responsive, accessible UI for the public platform of the Indian Venture and Alternate Capital Association — an industry body serving 250+ PE, VC, and alternative-investment funds. Members, events, and research sections with optimized data-fetching (React Query) and Formik-driven forms, plus integration tests.",
    tags: ["Next.js", "Formik", "Chakra UI", "React Query", "Jest"],
    links: [
      { label: "Live Site", href: "https://www.ivca.in/", variant: "live" },
    ],
  },
  {
    title: "CraveWave",
    year: "2023",
    description:
      "A feature-rich, responsive food-delivery app with Google authentication and secure Stripe payments — seamless browsing, ordering, and order tracking.",
    tags: ["Next.js", "Tailwind", "MongoDB", "Stripe", "Prisma"],
    links: [
      {
        label: "Live Site",
        href: "https://food-app-ardhendu-init.vercel.app/",
        variant: "live",
      },
      {
        label: "Code",
        href: "https://github.com/Ardhendu-init/Food-App",
        variant: "code",
      },
    ],
  },
  {
    title: "Fashnest",
    year: "2022",
    description:
      "A full-stack e-commerce app with an Express.js backend, React.js frontend, and MongoDB — built with Redux Toolkit, Styled Components, and React Router.",
    tags: [
      "React.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Styled Components",
    ],
    links: [
      {
        label: "Live Site",
        href: "https://fashnest.netlify.app/",
        variant: "live",
      },
      {
        label: "Code",
        href: "https://github.com/Ardhendu-init/Frontend-Fashnest",
        variant: "code",
      },
    ],
  },
];

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white link-underline"
        >
          {link.variant === "code" ? (
            <Github className="w-4 h-4 text-accent-soft" />
          ) : (
            <ArrowUpRight className="w-4 h-4 text-accent-soft" />
          )}
          {link.label}
        </a>
      ))}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2.5 py-1 rounded-md text-xs font-mono text-gray-400 bg-white/[0.04] border border-line"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 md:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="03"
          title="Projects"
          subtitle="Selected work — from a solo AI platform to production apps used in the field."
        />

        {/* Featured card */}
        <Reveal className="mb-8">
          <div className="group relative block surface rounded-3xl p-8 md:p-10 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/15 blur-3xl pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="eyebrow text-accent-soft">★ Featured</span>
                <span className="h-px flex-1 bg-line" />
                <span className="font-mono text-xs text-muted">
                  {featured.year}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 max-w-3xl">
                {featured.title}
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-3xl mb-6">
                {featured.description}
              </p>
              <div className="mb-6">
                <Tags tags={featured.tags} />
              </div>
              <ProjectLinks links={featured.links} />
            </div>
          </div>
        </Reveal>

        {/* Rest grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                className="surface rounded-2xl p-7 flex flex-col h-full"
              >
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted shrink-0">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>
                <div className="mb-5">
                  <Tags tags={project.tags} />
                </div>
                <ProjectLinks links={project.links} />
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <Reveal className="mt-10 text-center">
          <a
            href="https://github.com/Ardhendu-init"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line hover:border-accent/60 text-white font-medium transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            30+ more projects on GitHub
            <ArrowUpRight className="w-4 h-4 text-accent-soft" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
