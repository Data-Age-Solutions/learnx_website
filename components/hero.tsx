"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const schools = [
  "Westgate Academy",
  "Lagos International",
  "Sunshine High",
  "Riverside College",
  "St. Andrew's Prep",
  "Northfield School",
  "Kingsway Academy",
  "Delta International",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFC]">
      {/* Subtle blurred gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-teal-200/40 via-teal-100/20 to-transparent blur-3xl" />
        <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#7C3AED]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center pt-36 pb-16">
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium mb-8 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
        >
          Trusted by 500+ schools worldwide
        </motion.div>

        <motion.h1
          custom={0.1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.08] mb-6"
        >
          One platform for school
          <br />
          management and{" "}
          <span className="text-gradient-brand">online learning</span>
        </motion.h1>

        <motion.p
          custom={0.2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          LearnX brings your school&apos;s administration and your classrooms
          online — two systems, one intelligent platform.
        </motion.p>

        <motion.div
          custom={0.3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
          >
            Book a Demo
            <ArrowRight size={16} />
          </a>
          <a
            href="#platform"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:border-slate-300 transition-colors"
          >
            Explore the Platform
          </a>
        </motion.div>

        <motion.div
          custom={0.4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400"
        >
          {[
            "No credit card required",
            "Free 30-day trial",
            "Setup in minutes",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-teal-500" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Framed product mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 mb-20"
      >
        <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/bg3.jpg"
              alt="LearnX platform overview"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Logo marquee */}
      <div className="relative z-10 pb-20">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
          Powering schools across the region
        </p>
        <div className="overflow-hidden">
          <div className="flex w-max marquee-track">
            {[...schools, ...schools].map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="mx-8 text-lg font-semibold text-slate-300 whitespace-nowrap"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
