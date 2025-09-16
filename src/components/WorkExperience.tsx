"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

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

export default function WorkExperience() {
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
          Work Experience
        </motion.h2>

        <motion.div className="space-y-8" variants={staggerContainer}>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            variants={fadeInUp}
          >
            <div className="flex items-start gap-4 mb-4">
              <Briefcase className="w-8 h-8 text-blue-400 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Software Developer
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                  <span className="font-semibold text-blue-300">A2ZPORT</span>
                  <span>Remote - Long Beach, CA</span>
                  <span>October 2023 – Present</span>
                </div>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 text-sm">▸</span>
                    <span>
                      Contributed to the development of a container tracking
                      system at A2ZPort, utilizing React.js and Next.js to
                      enhance web application functionality and user experience.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 text-sm">▸</span>
                    <span>
                      Translated designs and wireframes into high-quality,
                      responsive code, ensuring seamless integration between UI
                      and backend functionalities.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 text-sm">▸</span>
                    <span>
                      Played a key role in ensuring system reliability through
                      Cypress testing, underscoring a commitment to delivering a
                      robust product for efficient container monitoring and
                      logistical planning in port operations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            variants={fadeInUp}
          >
            <div className="flex items-start gap-4 mb-4">
              <Briefcase className="w-8 h-8 text-purple-400 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Software Engineer
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                  <span className="font-semibold text-purple-300">
                    THE INTERNET FOLKS
                  </span>
                  <span>Bhopal, Madhya Pradesh</span>
                  <span>Aug 2022 – April 2023</span>
                </div>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1.5 text-sm">▸</span>
                    <span>
                      Enhanced web application functionality and user experience
                      with React.js and Next.js.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1.5 text-sm">▸</span>
                    <span>
                      Developed reusable components and libraries in JavaScript,
                      TypeScript, React.js, and Next.js for efficient future
                      development and maintenance.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            variants={fadeInUp}
          >
            <div className="flex items-start gap-4 mb-4">
              <Briefcase className="w-8 h-8 text-green-400 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Associate Trainee Engineer (IT Support)
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                  <span className="font-semibold text-green-300">CMS</span>
                  <span>Kolkata, West Bengal</span>
                  <span>Oct 2019 - Mar 2020</span>
                </div>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1.5 text-sm">▸</span>
                    <span>
                      Diligently addressed computer issues: hardware, software
                      troubleshooting, installations, updates, and routine
                      maintenance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1.5 text-sm">▸</span>
                    <span>
                      Provided timely, effective technical support via phone,
                      email, and in-person interactions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
