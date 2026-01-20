"use client";

import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface AboutCardProps {
  course: string;
  icon: IconType;
  institution: string;
  cgpa?: string;
  period: string;
  details: string[];
}

const AboutCard = ({
  course,
  icon: Icon,
  institution,
  cgpa,
  period,
  details,
}: AboutCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
    >
      {/* Animated gradient border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 blur-xl" />
      </div>

      {/* Inner content wrapper */}
      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start gap-4 mb-5">

          {/* Animated Icon */}
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-lg"
          >
            <Icon size={22} />
          </motion.div>

          {/* Title */}
          <div>
            <h3 className="text-lg font-semibold text-white leading-tight">
              {course}
            </h3>
            <p className="text-sm text-gray-400">
              {institution}
            </p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-5">
          <span className="tracking-wide">{period}</span>

          {cgpa && (
            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">
              CGPA: {cgpa}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

        {/* Details */}
        <ul className="space-y-2 text-sm text-gray-300">
          {details.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default AboutCard;
