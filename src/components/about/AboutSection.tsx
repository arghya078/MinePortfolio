"use client";

import React from "react";
import Header from "../general/Header";
import AboutCard from "./AboutCard";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="w-[90%] sm:w-[80%] mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-14"
        >
          {/* Education Column */}
          <motion.div className="space-y-8">
            <Header title="My Education" />

            <div className="space-y-6">
              <AboutCard
                course="B.Tech in Electrical Engineering"
                icon={FaGraduationCap}
                institution="Narula Institute of Technology"
                period="2021 - 2024"
                cgpa="8.42"
                details={[
                  "Specialized in Electrical Engineering with a focus on power systems",
                  "Completed coursework in Circuit Analysis, Control Systems, and Renewable Energy",
                  "Active member of the Tech Club, organizing workshops and hackathons",
                ]}
              />

              <AboutCard
                course="Diploma in Electrical Engineering"
                icon={FaGraduationCap}
                institution="Narula Institute of Technology"
                period="2018 - 2021"
                cgpa="7.6"
                details={[
                  "Focused on foundational electrical engineering concepts and practical applications",
                  "Completed projects on basic circuit design and analysis",
                  "Gained hands-on experience with lab equipment and tools",
                ]}
              />
            </div>
          </motion.div>

          {/* Training Column */}
          <motion.div className="space-y-8">
            <Header title="Professional Training" />

            <div className="space-y-6">
              <AboutCard
                course="MERN Stack Web Development Training"
                icon={FaLaptopCode}
                institution="Webskitters Academy"
                period="2024 - 2025"
                details={[
                  "Comprehensive training on MongoDB, Express.js, React.js, and Node.js",
                  "Built multiple full-stack applications as part of the curriculum",
                  "Worked with REST APIs, authentication, state management, and deployment",
                  "Collaborated on team projects simulating real-world development workflows",
                ]}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
