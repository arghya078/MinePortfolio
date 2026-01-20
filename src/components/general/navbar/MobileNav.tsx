"use client"

import React from 'react'
import { LuX, LuDownload } from 'react-icons/lu'
import LinkButton from '../LinkButton'

interface MobileNavProps {
  navOpen: boolean
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
  navLinks: { url: string; label: string }[]
}

const MobileNav = ({ navOpen, setNavOpen, navLinks }: MobileNavProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setNavOpen(false)}
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${navOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[85%] max-w-sm z-50
          bg-zinc-950/80 backdrop-blur-xl
          border-l border-white/10
          shadow-2xl
          transition-transform duration-300 ease-in-out
          ${navOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full p-6">

          {/* Top */}
          <div className="flex items-center justify-between mb-10">
            <span className="text-xl font-bold text-white">Menu</span>
            <button
              onClick={() => setNavOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              <LuX size={26} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-6 text-lg">
            {navLinks.map(link => (
              <a
                key={link.url}
                href={link.url}
                onClick={() => setNavOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom Button */}
          <div className="mt-auto pt-10">
            <LinkButton
              href="/documents/Arghya_Cv.pdf"
              text="Download CV"
              label="Download my CV"
              download
              icon={LuDownload}
              iconPosition="left"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav
