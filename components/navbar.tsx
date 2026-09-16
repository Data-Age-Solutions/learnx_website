"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "School Management", href: "#platform" },
  { label: "Learning Management", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // The hero is light now, so the bar is always the light treatment. Scroll
  // only decides whether it carries a bottom rule and a shadow — floating over
  // a white hero, a hard border from the first pixel reads as a seam.
  const lifted = scrolled || open;

  return (
    <motion.header
      data-reveal
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        lifted
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80"
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/images/learnx-logo.png"
              alt="LearnX"
              width={240}
              height={64}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-slate-500 transition-colors hover:text-navy-900"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-slate-500 transition-colors hover:text-navy-900"
            >
              Sign in
            </a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-sm font-semibold rounded-full text-white bg-navy-900 transition-colors hover:bg-navy-800"
            >
              Book a Demo
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-600 transition-colors hover:bg-slate-100"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-reveal
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 space-y-2">
                <a href="#" className="block w-full px-3 py-2.5 text-sm font-medium text-center text-slate-600 border border-slate-200 rounded-full">
                  Sign in
                </a>
                <a href="#pricing" className="block w-full px-3 py-2.5 text-sm font-semibold text-center text-white bg-navy-900 rounded-full">
                  Book a Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
