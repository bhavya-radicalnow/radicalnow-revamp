"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
    requestAnimationFrame(() => setIsOpen(true));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setShowMenu(false), 300);
  };

  const toggleMenu = () => {
    if (showMenu) closeMenu();
    else openMenu();
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl">
      {/* pill container */}
      <div
        className="w-full rounded-[40px] py-2 md:py-6 px-6 backdrop-blur-md bg-slate-900/45 border border-white/6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* logo left */}
        <Link href="/" className="flex items-center">
          <div className="relative w-[220px] md:w-[280px] lg:w-[320px] h-[24px] md:h-[32px] lg:h-[36px]">
            <Image
              src="/rnlabs.png"
              alt="RadicalNow Labs Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>

        {/* desktop links right */}
        <div className="hidden md:flex items-center gap-8 text-white/95 text-lg font-semibold tracking-tight lg:mr-6">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/work" className="nav-link">Work</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/#team" className="nav-link">Team</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </div>

        {/* mobile button right */}
        <div className="md:hidden flex items-center">
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            {isOpen ? <X size={18} className="text-slate-800" /> : <Menu size={18} className="text-slate-800" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {showMenu && (
        <div
          className={`mt-3 w-full max-w-6xl mx-auto rounded-2xl backdrop-blur-xl bg-slate-900/45 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] py-8 px-6 md:hidden dropdown ${
            isOpen ? "dropdown-enter" : "dropdown-exit"
          }`}
        >
          <nav className="flex flex-col gap-6 text-white text-lg font-medium text-center">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/work" onClick={closeMenu}>Work</Link>
            <Link href="/services" onClick={closeMenu}>Services</Link>
            <Link href="/#team" onClick={closeMenu}>Team</Link>
            <Link href="#contact" onClick={closeMenu}>Contact</Link>
          </nav>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          position: relative;
          padding: 6px 8px;
          border-radius: 8px;
        }
        .nav-link:hover,
        .nav-link:focus {
          color: white;
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-1px);
        }

        .dropdown {
          animation-duration: 300ms;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dropdown-enter {
          animation-name: slideDown;
        }
        .dropdown-exit {
          animation-name: slideUp;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
        }
      `}</style>
    </nav>
  );
}