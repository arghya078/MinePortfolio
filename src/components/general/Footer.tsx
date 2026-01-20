import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/10 overflow-hidden">
      
      {/* Soft glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute right-1/4 bottom-1/2 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="w-[90%] sm:w-[80%] mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Arghyadeep Dutta
          </h2>
          <p className="text-sm text-gray-400">
            Building modern web experiences with passion.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/arghya078"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/arghyadeep-dutta-b2511120a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:jeetdutta078@gmail.com"
            className="text-gray-400 hover:text-white transition hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>
            © {new Date().getFullYear()} All rights reserved
          </p>
          <p className="flex items-center justify-center md:justify-end gap-1">
            Made with <FaHeart className="text-red-500" /> by Arghyadeep
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
