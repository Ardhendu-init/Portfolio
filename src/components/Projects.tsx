"use client";

import { motion } from "framer-motion";
import {
  Building,
  Utensils,
  ShoppingBag,
  GitBranch,
  Github,
  ExternalLink,
} from "lucide-react";

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

export default function Projects() {
  return (
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
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">IVCA</h3>
            </div>
            <p className="text-gray-300 mb-4">
              As a Frontend Developer, I played a pivotal role in creating the
              front end of the IVCA (Indian Venture and Alternate Capital
              Association) website. I translated design concepts and wireframes
              into a fully functional and visually appealing web application.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                Formik
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                Chakra UI
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                React Query
              </span>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.ivca.in/"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Site</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Utensils className="w-8 h-8 text-orange-400" />
              <h3 className="text-xl font-semibold text-white">CRAVEWAVE</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Designed and built a feature-rich responsive food application
              encompassing user-friendly Google authentication and secure
              payment processing through Stripe. The app prioritizes user
              experience, enabling seamless browsing, ordering, and tracking of
              food delivery.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                Stripe
              </span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                Prisma
              </span>
            </div>
            <div className="flex gap-2">
              <a
                href="https://food-app-ardhendu-init.vercel.app/"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Site</span>
              </a>
              <a
                href="https://github.com/Ardhendu-init/Food-App"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
              >
                <span>Code</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="w-8 h-8 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">FASHNEST</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Developed a full stack E-Commerce Web App using Express.js for the
              back-end, React.js for the front-end, MongoDB as the database.
              Utilized Redux-Toolkit, Styled Components, and React-router for
              seamless functionality and styling.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                React.js
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Express.js
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Redux-Toolkit
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Styled Components
              </span>
            </div>
            <div className="flex gap-2">
              <a
                href="https://fashnest.netlify.app/"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Site</span>
              </a>
              <a
                href="https://github.com/Ardhendu-init/Frontend-Fashnest"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
              >
                <span>Code</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="text-center mt-12" variants={fadeInUp}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 border-dashed">
            <GitBranch className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300 mb-4">
              30+ Personal Projects available on GitHub!
            </p>
            <a
              href="https://github.com/Ardhendu-init"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View Complete Portfolio</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
