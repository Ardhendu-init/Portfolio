"use client";

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const links = [
  {
    icon: Mail,
    label: "ardhendujj002@gmail.com",
    href: "mailto:ardhendujj002@gmail.com",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/ardhendup",
    href: "https://www.linkedin.com/in/ardhendup/",
  },
  {
    icon: Github,
    label: "github.com/Ardhendu-init",
    href: "https://github.com/Ardhendu-init",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="eyebrow text-accent-soft">06</span>
            <span className="h-px w-10 bg-accent/50" />
            <span className="eyebrow text-muted">What&apos;s next</span>
          </div>

          <h2 className="headline-tint text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            Let&apos;s build something{" "}
            <span className="text-accent-soft">great</span> together.
          </h2>

          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            I&apos;m open to frontend and full-stack roles, and to interesting
            collaborations. My inbox is always open — whether you have a question
            or just want to say hi, I&apos;ll get back to you.
          </p>

          <div className="mt-10">
            <a
              href="mailto:ardhendujj002@gmail.com"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent hover:bg-accent-dim text-white font-medium transition-colors duration-300"
            >
              Get in touch
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-14 grid sm:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden"
        >
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-background/60 hover:bg-white/[0.03] p-6 transition-colors"
            >
              <Icon className="w-5 h-5 text-accent-soft mb-3" />
              <div className="text-sm text-white font-medium break-all group-hover:text-accent-soft transition-colors">
                {label}
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
