"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
};

export default function ExpandableDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullDescription = [
    "As a software developer, I have had the privilege of working with several esteemed organizations, gaining extensive experience in web technologies and UI/UX design. Currently, I am a Software Developer at A2ZPort, focusing primarily on front-end development. My role involves working on cutting-edge projects and collaborating with dynamic teams to create seamless user experiences.",
    "Previously, I worked as a Software Developer at The Internet Folks, where I expanded my expertise in JavaScript/TypeScript frameworks such as React.js and Next.js, and honed my skills in HTML, CSS, JavaScript, and TypeScript. I also have a solid foundation in backend development with Express.js and MongoDB, and proficiency in Java.",
    "My journey in software development began during my B. Tech in Electronics and Telecommunications, which I completed in 2022 with an 8.83 CGPA. My academic career was rich with projects focused primarily on software development. This experience solidified my passion for the software industry, driven by a love for problem-solving and continuous learning.",
    "Additionally, I gained practical experience during an internship at Chuhiya Software and Private Limited, where I was responsible for web development, research, and data collection and analysis. This role provided invaluable insights into the professional software engineering landscape, emphasizing the importance of adhering to workflows and deadlines.",
    "I have actively participated in hackathons, including Codevita 10, where I secured a global rank of 604. I am also engaged on coding platforms like Leetcode, HackerRank, and Geeks for Geeks, constantly challenging myself and staying updated with the latest in software development.",
    "My strengths lie in my coachable nature, eagerness to learn, enthusiasm for my work, and team-oriented mindset. I thrive in collaborative environments and am committed to delivering results on time.",
    "Outside of my professional pursuits, I enjoy watching and playing cricket, reading storybooks, and reciting poetry.",
  ];

  const truncatedDescription = fullDescription.slice(0, 2);

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        About Me
      </h2>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="space-y-6">
          {(isExpanded ? fullDescription : truncatedDescription).map(
            (paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            )
          )}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.p
              className="text-lg text-blue-300 font-semibold mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              Let&apos;s connect and share our passion for software development!
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{isExpanded ? "Show Less" : "Read More"}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}
