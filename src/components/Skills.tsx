"use client";

import { Code2, Layout, Server, Brain, Database, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

type Skill = { icon: LucideIcon; title: string; items: string[] };

const skills: Skill[] = [
  {
    icon: Code2,
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: [
      "Next.js (App Router)",
      "React 19",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "shadcn/ui",
      "React Flow",
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Next.js API / Server Actions",
      "FastAPI",
      "REST",
      "Zod",
      "Liveblocks (CRDT)",
      "Trigger.dev",
    ],
  },
  {
    icon: Brain,
    title: "AI Engineering",
    items: [
      "LLM app development",
      "RAG",
      "pgvector",
      "Google Gemini",
      "OpenRouter",
      "Prompt engineering",
      "Structured output",
      "Agentic workflows",
      "SQLAlchemy",
      "AI-assisted dev (Claude)",
    ],
  },
  {
    icon: Database,
    title: "Data & Infra",
    items: [
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Supabase",
      "Clerk",
      "Vercel",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    icon: Workflow,
    title: "Practices",
    items: [
      "Spec-Driven Development",
      "Component architecture",
      "Performance optimization",
      "System design",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="04"
          title="Skills"
          subtitle="The stack I reach for to design, build, and ship — front to back."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {skills.map(({ icon: Icon, title, items }, i) => (
            <Reveal
              key={title}
              delay={i * 0.06}
              className="group bg-background/60 hover:bg-white/[0.03] p-7 transition-colors duration-300 h-full"
            >
              <div className="flex items-center gap-3 mb-5">
                <Icon className="w-5 h-5 text-accent-soft" />
                <h3 className="eyebrow text-white">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md text-sm text-gray-300 bg-white/[0.04] border border-line group-hover:border-accent/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
