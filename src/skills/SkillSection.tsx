"use client";

import Header from "@/components/general/Header";
import React from "react";
import { motion, type Variants } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPython,
  SiNextdotjs,
  SiJsonwebtokens,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";



const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4, 
    },
  },
};

const SkillSection = () => {
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Python", icon: SiPython, color: "text-blue-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-200" },
    { name: "REST API", icon: TbApi, color: "text-cyan-400" },
    { name: "JWT Auth", icon: SiJsonwebtokens, color: "text-pink-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-200" },
    { name: "Postman", icon: SiPostman, color: "text-orange-400" },
    { name: "Docker", icon: FaDocker, color: "text-sky-500" },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-purple-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="w-[90%] sm:w-[80%] mx-auto space-y-12">
        <Header title="My Skills" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <Icon
                    className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                  <span className="text-sm text-gray-300 font-medium text-center">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
