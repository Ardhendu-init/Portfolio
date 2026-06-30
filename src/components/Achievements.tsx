"use client";

import { GraduationCap, Sparkles, FileText, Code2, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

type Education = {
  degree: string;
  school: string;
  period: string;
  grade: string;
};

const education: Education[] = [
  {
    degree: "B.Tech, Electronics & Communication (Lateral Entry)",
    school: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
    period: "Aug 2019 – Jun 2022",
    grade: "CGPA 8.83 / 10",
  },
  {
    degree: "Diploma, Electronics & Communication Engineering",
    school: "WBSCTVESD",
    period: "Aug 2016 – Jun 2019",
    grade: "CGPA 9.3 / 10",
  },
];

type Achievement = {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: { label: string; href: string };
};

const achievements: Achievement[] = [
  {
    icon: Sparkles,
    title: "Shipped CareerLens",
    description:
      "Built and deployed a full-stack RAG application from scratch — first project combining Python/FastAPI backend with AI-native frontend, going from zero FastAPI experience to live production deployment.",
    link: {
      label: "View live",
      href: "https://career-lens-tan.vercel.app",
    },
  },
  {
    icon: Sparkles,
    title: "Shipped Ghost AI",
    description:
      "Built and deployed an AI-native, real-time collaboration platform end-to-end — deepening expertise in distributed systems and AI engineering.",
    link: { label: "View live", href: "https://ghost-ai-vert-two.vercel.app" },
  },
  {
    icon: FileText,
    title: "Technical blogging",
    description:
      "Authored blogs on React performance optimization and TypeScript patterns, sharing practical insights with the developer community.",
    link: { label: "Read on Medium", href: "https://medium.com/@Ardhendu_init_" },
  },
  {
    icon: Code2,
    title: "200+ DSA problems",
    description:
      "Regular Data Structures & Algorithms practice on LeetCode and GeeksforGeeks to sharpen problem-solving and analytical skills.",
  },
];

export default function Beyond() {
  return (
    <section id="education" className="py-24 md:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="05"
          title="Beyond the Code"
          subtitle="Education, recognition, and the habits that keep me sharp."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <Reveal>
              <h3 className="eyebrow text-muted mb-6">Education</h3>
            </Reveal>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <Reveal
                  key={edu.degree}
                  delay={i * 0.06}
                  className="surface rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <GraduationCap className="w-5 h-5 text-accent-soft mt-1 shrink-0" />
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-gray-400">{edu.school}</p>
                      <div className="mt-2 flex flex-wrap gap-x-4 font-mono text-xs text-muted">
                        <span>{edu.period}</span>
                        <span className="text-accent-soft">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <Reveal>
              <h3 className="eyebrow text-muted mb-6">
                Achievements & Activities
              </h3>
            </Reveal>
            <div className="space-y-6">
              {achievements.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    key={item.title}
                    delay={i * 0.06}
                    className="surface rounded-2xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="w-5 h-5 text-accent-soft mt-1 shrink-0" />
                      <div>
                        <h4 className="text-base font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                        {item.link && (
                          <a
                            href={item.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white link-underline"
                          >
                            {item.link.label}
                            <ArrowUpRight className="w-4 h-4 text-accent-soft" />
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
