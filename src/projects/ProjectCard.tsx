"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  liveDemoLink?: string;
  sourceCodeLink?: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  liveDemoLink,
  sourceCodeLink,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse-following spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
    >
      {/* Mouse spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              transparent 70%
            )
          `,
        }}
      />

      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

      {/* Content wrapper */}
      <div className="relative z-10">

        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">

          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition">
            {title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            {description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 pt-2">
            {liveDemoLink && (
              <motion.a
                whileHover={{ x: 3 }}
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition"
              >
                <LuExternalLink size={16} />
                Live Demo
              </motion.a>
            )}

            {sourceCodeLink && (
              <motion.a
                whileHover={{ x: 3 }}
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <LuGithub size={16} />
                Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
