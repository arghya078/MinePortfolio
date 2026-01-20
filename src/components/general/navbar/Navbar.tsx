"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import LinkButton from "../LinkButton";
import { LuDownload } from "react-icons/lu";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const navLinks = [
    { url: "#home", label: "Home" },
    { url: "#about", label: "About" },
    { url: "#projects", label: "Projects" },
    { url: "#skills", label: "Skills" },
    { url: "#contact", label: "Contact" },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        navBackground
          ? "bg-zinc-950/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-18 justify-between w-[90%] mx-auto py-4">
        <Logo />

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-10">
          {navLinks.map((link) => (
            <li
              key={link.url}
              className="text-gray-200 hover:text-cyan-400 font-medium transition-colors duration-300"
            >
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <LinkButton
            href="/documents/Arghya_Cv.pdf"
            text="Download CV"
            label="Download my CV"
            download
            icon={LuDownload}
            iconPosition="left"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavOpen(true)}
          className="lg:hidden text-white text-3xl"
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Mobile Nav */}
        <MobileNav
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          navLinks={navLinks}
        />
      </div>
    </nav>
  );
};

export default Navbar;
