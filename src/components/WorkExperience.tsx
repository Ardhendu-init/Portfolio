"use client";

import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "A2ZPORT",
    location: "Remote — Long Beach, CA",
    period: "Oct 2023 – Sep 2025",
    points: [
      "Engineered transport and container-tracking modules (Next.js App Router, React, TypeScript) handling 300+ active shipments daily across dispatch and tracking workflows.",
      "Architected a library of 25+ reusable UI components, cutting cross-module duplication by ~40% and accelerating new-feature delivery.",
      "Centralized state with Redux Toolkit, reducing unnecessary re-renders by ~35%; optimized API caching with React Query, improving average load time by ~20%.",
      "Wrote Zod schemas for runtime API request/response validation, reducing production data-shape errors after deployment.",
    ],
  },
  {
    role: "Software Engineer",
    company: "The Internet Folks",
    location: "Bhopal, MP",
    period: "Aug 2022 – Apr 2023",
    points: [
      "Built production features in React / Next.js, translating Figma designs into pixel-accurate, responsive interfaces across multiple client products.",
      "Wrote unit & integration tests (Jest, React Testing Library) for critical UI components, reducing manual regression effort.",
      "Drove code-review standards that improved team-wide consistency in component patterns and API integration.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24 md:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="02"
          title="Experience"
          subtitle="Where I've shipped real software for real users."
        />

        <div className="relative">
          {/* vertical rail */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-line hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Reveal
                key={`${exp.company}-${exp.period}`}
                delay={i * 0.08}
                className="relative md:pl-10"
              >
                {/* node */}
                <span className="absolute left-0 top-2 hidden md:flex -translate-x-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {exp.role}{" "}
                    <span className="text-accent-soft">· {exp.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="font-mono text-xs text-muted mb-5">
                  {exp.location}
                </p>

                <ul className="space-y-3">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-300 leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent-soft shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
