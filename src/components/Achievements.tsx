"use client";

import { motion } from "framer-motion";
import { GitBranch, Brain, FileText, Github, ExternalLink } from "lucide-react";

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

export default function Achievements() {
  return (
    <motion.section
      className="py-20 bg-white/5 backdrop-blur-sm"
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
          Achievements
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <GitBranch className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              30+ Personal Projects
            </h3>
            <p className="text-gray-300 mb-6">
              Built and maintained over 30 personal projects showcasing various
              technologies and problem-solving skills.
            </p>
            <a
              href="https://github.com/Ardhendu-init"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              400+ DSA Problems Solved
            </h3>
            <p className="text-gray-300 mb-6">
              Solved 400+ problems based on Data Structures and Algorithms on
              LeetCode and GeeksForGeeks.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Profile</span>
            </a>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Technical Blogging
            </h3>
            <p className="text-gray-300 mb-6">
              Embarked on authoring technical blogs on the Medium platform,
              sharing valuable insights and expertise in various technical
              subjects.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
            >
              <FileText className="w-5 h-5" />
              <span>Read Blogs</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
