"use client";

import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Ardhendu-init", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ardhendup/",
    label: "LinkedIn",
  },
  { icon: FileText, href: "https://medium.com/@Ardhendu_init_", label: "Blog" },
  { icon: Mail, href: "mailto:ardhendujj002@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-white">
            <span className="text-accent-soft">{"{ "}</span>Ardhendu Pramanik
            <span className="text-accent-soft">{" }"}</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            © {year} · Designed & built with Next.js, Tailwind & a little AI.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-full text-muted hover:text-white hover:bg-white/5 transition-colors duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 p-2.5 rounded-full border border-line text-muted hover:text-white hover:border-accent/60 transition-colors duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
