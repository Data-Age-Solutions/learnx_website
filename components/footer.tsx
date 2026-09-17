"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";

const nav = [
  {
    heading: "School Management",
    links: [
      { label: "Student Records", href: "#platform" },
      { label: "e-Register", href: "#platform" },
      { label: "AI Timetable", href: "#ai" },
      { label: "Billing & Finance", href: "#platform" },
    ],
  },
  {
    heading: "Learning Management",
    links: [
      { label: "Course Builder", href: "#platform" },
      { label: "Assignments & Grading", href: "#platform" },
      { label: "Virtual Classrooms", href: "#platform" },
      { label: "Online Exams", href: "#platform" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#integrations" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const socials = [
  { label: "LearnX on Twitter", icon: Twitter },
  { label: "LearnX on LinkedIn", icon: Linkedin },
  { label: "LearnX on Facebook", icon: Facebook },
];

const contact = [
  {
    icon: MapPin,
    content: "150 Upper East Road, Mount Pleasant, Harare, Zimbabwe",
  },
  { icon: Phone, content: "+263 71 877 3999", href: "tel:+263718773999" },
  {
    icon: Mail,
    content: "learnx@bytewave.co.zw",
    href: "mailto:learnx@bytewave.co.zw",
  },
];

/** Columns arrive one after another rather than all at once. */
const column = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative bg-[#0B1F3A] text-slate-400">
      {/* A lit seam along the top, so the footer starts rather than simply
          continuing the dark panel above it. */}
      <div
        aria-hidden
        className="h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        {/* The brand column carries a logo, a sentence and three contact rows,
            so it is given real width rather than an equal quarter share. */}
        <motion.div
          variants={reduceMotion ? undefined : group}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10"
        >
          <motion.div
            data-reveal
            variants={reduceMotion ? undefined : column}
            className="md:col-span-2 lg:col-span-1"
          >
            <a href="#" className="inline-flex items-center">
              <Image
                src="/images/learnx-logo-white.png"
                alt="LearnX"
                width={160}
                height={44}
                className="h-11 w-auto object-contain"
              />
            </a>

            <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
              School management and learning management, unified on one
              intelligent platform.
            </p>

            <ul className="mt-6 space-y-3">
              {contact.map(({ icon: Icon, content, href }) => (
                <li key={content} className="flex items-start gap-3">
                  <Icon
                    size={15}
                    className="mt-0.5 shrink-0 text-teal-400"
                    strokeWidth={1.9}
                  />
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400 leading-relaxed">
                      {content}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2.5 mt-7">
              {socials.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-navy-900 hover:bg-teal-400 hover:ring-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                >
                  <Icon size={16} strokeWidth={1.9} />
                </a>
              ))}
            </div>
          </motion.div>

          {nav.map((col) => (
            <motion.div
              data-reveal
              key={col.heading}
              variants={reduceMotion ? undefined : column}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 lg:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LearnX. All rights reserved.</p>
          <p>
            Designed &amp; built with{" "}
            <span className="text-teal-400">Next.js + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
