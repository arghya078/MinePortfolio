"use client";

import React from "react";
import Image from "next/image";
import AnimatedIntro from "./AnimatedIntro";
import LinkButton from "../../general/LinkButton";
import { LuArrowBigRight } from "react-icons/lu";
import Particles from "./Particles";
import { FaGithub } from "react-icons/fa6";
import { motion, type Variants } from "framer-motion";

// =========================
// Properly typed variants
// =========================

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const float: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};



const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-zinc-950"
    >
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Soft glow background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[160px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center space-y-8 max-w-3xl"
        >
          {/* Avatar */}
          <motion.div
            variants={item}
            animate="animate"
            className="relative w-44 h-44 sm:w-52 sm:h-52"
          >
            <motion.div variants={float} animate="animate" className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-spin-slow blur-md opacity-80" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-950">
                <Image
                  src="/images/image.png"
                  alt="Profile"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div variants={item} className="space-y-5">
            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Arghyadeep Dutta
              </span>
            </h1>

            <AnimatedIntro />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <LinkButton
                href="#projects"
                text="See my works"
                label="View projects"
                icon={LuArrowBigRight}
                rounded
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <LinkButton
                href="https://github.com/arghya078"
                text="GitHub"
                label="Visit my GitHub profile"
                icon={FaGithub}
                iconPosition="left"
                rounded
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
