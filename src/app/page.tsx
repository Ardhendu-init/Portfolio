"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Code,
  Laptop,
  Database,
  GraduationCap,
  Brain,
} from "lucide-react";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import ExpandableDescription from "@/components/ExpandableDescription";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <motion.section
        className="relative overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Ardhendu Pramanik"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML =
                        '<span class="text-4xl font-bold text-white">AP</span>';
                    }
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                <span className="text-white font-bold text-lg">AP</span>
              </div>
            </div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              Ardhendu Pramanik
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              A passionate Software Developer | Javascript, React, Next.js,
              Express, Node, Java | B.Tech in Electronics and Communication |
              Goal oriented and focused
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              variants={fadeInUp}
            >
              <a
                href="mailto:ardhendujj002@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>ardhendujj002@gmail.com</span>
              </a>
              <a
                href="tel:+918436668381"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+91-8436668381</span>
              </a>
              <a
                href="https://github.com/Ardhendu-init"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ardhendup"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-20 bg-white/5 backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExpandableDescription />
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center"
            variants={fadeInUp}
          >
            Skills
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Languages</h3>
              </div>
              <p className="text-gray-300">JavaScript, TypeScript, Java, SQL</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Laptop className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Web Development
                </h3>
              </div>
              <p className="text-gray-300">
                React, Next.js, Redux, Node.js, Express.js, REST API, HTML, CSS
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Technology</h3>
              </div>
              <p className="text-gray-300">
                Git, MySQL, MongoDB, Prisma, Stripe
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">
                  Course Work
                </h3>
              </div>
              <p className="text-gray-300">
                Data Structures, Algorithms, Object Oriented Programming (OOPs)
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-red-400" />
                <h3 className="text-xl font-semibold text-white">
                  Other Skills
                </h3>
              </div>
              <p className="text-gray-300">
                Problem-Solving, Complexity Analysis, Troubleshooting,
                Debugging, Communication
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Work Experience Section */}
      <WorkExperience />

      {/* Projects Section */}
      <Projects />

      {/* Achievements Section */}
      <Achievements />

      {/* Footer */}
      <Footer />
    </div>
  );
}
