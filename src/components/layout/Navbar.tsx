"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100 py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-50 group">
              <div className="relative h-12 w-40">
  <Image
    src="/images/logo.jpeg"
    alt="GK Journeys"
    fill
    className="object-contain"
    priority
  />
</div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative text-xs font-semibold tracking-widest uppercase transition-colors group py-2",
                      isActive
                        ? isScrolled ? "text-primary" : "text-white"
                        : isScrolled ? "text-gray-600 hover:text-primary" : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                      isScrolled ? "bg-primary" : "bg-white"
                    )} />
                  </Link>
                );
              })}
              
              <div className={cn("w-px h-4 mx-2 transition-colors", isScrolled ? "bg-gray-200" : "bg-white/30")} />
              
              <a
                href="https://wa.me/917892050273"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-6 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-full",
                  isScrolled 
                    ? "bg-primary text-white hover:bg-secondary shadow-md hover:shadow-lg" 
                    : "bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-gray-900 border border-white/30"
                )}
              >
                Plan Journey
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden z-50 p-2 flex flex-col gap-1.5 justify-center items-center w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={cn(
                "w-6 h-[2px] rounded-full transition-all duration-300", 
                (isScrolled || isMobileMenuOpen) ? "bg-gray-900" : "bg-white",
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              )} />
              <span className={cn(
                "w-6 h-[2px] rounded-full transition-all duration-300", 
                (isScrolled || isMobileMenuOpen) ? "bg-gray-900" : "bg-white",
                isMobileMenuOpen ? "opacity-0" : ""
              )} />
              <span className={cn(
                "w-6 h-[2px] rounded-full transition-all duration-300", 
                (isScrolled || isMobileMenuOpen) ? "bg-gray-900" : "bg-white",
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              )} />
            </button>
          </div>
        </div>
      </header>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-32 px-8 flex flex-col h-screen"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-serif text-3xl block transition-colors",
                        isActive ? "text-primary font-bold" : "text-gray-900 hover:text-primary"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pb-12"
            >
              <div className="w-full h-px bg-gray-100 mb-8" />
              <a
                href="https://wa.me/917892050273"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-white py-4 rounded-full font-bold text-xs tracking-widest uppercase text-center block mb-6 shadow-lg shadow-primary/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Planning
              </a>
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                <span>Mysore, India</span>
                <a href="tel:+917892050273" className="hover:text-primary transition-colors text-gray-900">+91 78920 50273</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
