"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Footer() {
  return (
    <motion.footer
      className="py-12 border-t border-white/20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 mb-4">
          © 2024 Ardhendu Pramanik. All rights reserved.
        </p>
        <p className="text-gray-500">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </motion.footer>
  );
}
