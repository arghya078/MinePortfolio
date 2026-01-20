"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const AnimatedIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      className="text-center space-y-6"
    >
      {/* Small intro line */}
      <p className="text-gray-400 text-sm sm:text-base tracking-wide uppercase">
        I am a passionate
      </p>

      {/* Typewriter title */}
      <div className="relative">
        {/* Glow behind text */}
        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 opacity-60" />

        <h2 className="relative text-2xl sm:text-4xl font-bold min-h-[3rem]">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("MERN Stack Developer")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("React.js Developer")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("Next.js Developer")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("Node.js Developer")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("Tech Enthusiast")
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </span>
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
        Passionate about crafting{" "}
        <span className="text-white/90 font-medium">
          dynamic, responsive, and modern
        </span>{" "}
        web applications with great user experience and clean code.
      </p>
    </motion.div>
  );
};

export default AnimatedIntro;
