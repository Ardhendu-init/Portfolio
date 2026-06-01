"use client";

import Reveal from "@/components/Reveal";

type SectionHeaderProps = {
  /** Two-digit section index, e.g. "01". */
  index: string;
  /** Large display heading. */
  title: string;
  /** Optional one-line supporting copy under the heading. */
  subtitle?: string;
  align?: "left" | "center";
};

/**
 * Editorial section header: a monospace "NN / LABEL" eyebrow above a large
 * display heading, with an accent rule. Used across every section so the
 * numbered-section rhythm stays consistent. Self-contained reveal so it works
 * regardless of whether the parent section animates.
 */
export default function SectionHeader({
  index,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <Reveal className={`mb-12 md:mb-16 ${isCenter ? "text-center" : ""}`}>
      <div
        className={`flex items-center gap-3 mb-5 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="eyebrow text-accent-soft">{index}</span>
        <span className="h-px w-10 bg-accent/50" />
        <span className="eyebrow text-muted">{title}</span>
      </div>
      <h2 className="headline-tint text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg text-muted leading-relaxed ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
