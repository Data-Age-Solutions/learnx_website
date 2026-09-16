"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d },
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

const proofPoints = [
  "No credit card required",
  "Free 30-day trial",
  "Setup in minutes",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Ground: navy gradient, a teal spotlight behind the headline, a grid for
          structure, two drifting accent blobs, and a vignette. Layered rather
          than one flat fill — a single solid navy reads cheap at this scale. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B1F3A_0%,#122B4D_55%,#1E3A5F_100%)]" />
        <div className="absolute inset-0 hero-grid-dark" />
        <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[1100px] h-[1000px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.22),rgba(6,182,212,0.06)_45%,transparent_70%)] blur-2xl aurora-a" />
        <div className="absolute top-32 -right-40 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.26),transparent_65%)] blur-3xl aurora-b" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_28%,transparent,rgba(5,15,30,0.5))]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-36 pb-16">
        <motion.a
          href="#platform"
          custom={0}
          variants={fade}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="group inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full bg-white/[0.07] backdrop-blur-sm ring-1 ring-white/15 text-slate-200 text-[13px] font-medium tracking-tight mb-8 transition-colors duration-300 hover:bg-white/[0.12] hover:ring-white/25"
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#22D3EE] text-navy-900 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles size={11} />
            AI
          </span>
          Trusted by 500+ schools worldwide
          <ArrowRight
            size={13}
            className="text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </motion.a>

        <motion.h1
          custom={0.1}
          variants={fade}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="display-tight text-[2.4rem] sm:text-6xl md:text-[4.25rem] font-bold text-white leading-[1.03] mb-7 text-balance"
        >
          One platform for school
          <br className="hidden sm:block" /> management and{" "}
          <span className="relative inline-block">
            <span className="text-gradient-brand-dark">online learning</span>
            {/* Underscore in the same gradient, tying the phrase to the AI chip */}
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#A78BFA]/80 via-[#22D3EE]/80 to-transparent"
            />
          </span>
        </motion.h1>

        <motion.p
          custom={0.2}
          variants={fade}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="text-lg md:text-xl text-slate-300/90 leading-[1.6] tracking-[-0.011em] max-w-[38rem] mx-auto mb-10 text-pretty"
        >
          LearnX brings your school&apos;s administration and your classrooms
          online — two systems, one intelligent platform.
        </motion.p>

        <motion.div
          custom={0.3}
          variants={fade}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#pricing"
            className="sheen group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold tracking-tight text-navy-900 bg-white rounded-full shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)] transition-all duration-300 hover:shadow-[0_18px_40px_-12px_rgba(34,211,238,0.65)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Book a Demo
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </a>
          <a
            href="#platform"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold tracking-tight text-white bg-white/[0.06] backdrop-blur-sm rounded-full ring-1 ring-white/20 transition-all duration-300 hover:bg-white/[0.12] hover:ring-white/30 motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            Explore the Platform
          </a>
        </motion.div>

        <motion.div
          custom={0.4}
          variants={fade}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-400"
        >
          {proofPoints.map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-teal-400" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Product visual. No browser chrome here — this is a photograph of the
          product in use, and a fake address bar over a photo reads as a lie. */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 56, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 mb-20"
      >
        {/* Teal glow pooled behind the frame, so it lifts off the navy */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 bottom-4 top-8 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.3),transparent_70%)] blur-3xl"
        />
        {/* Outer bezel: a light rim on dark, which is how real hardware reads.
            The frame matches the artwork's own 3:2, so the image is shown whole
            — nothing cropped, nothing tinted, and no overlay across it. */}
        <div className="relative rounded-[20px] bg-white/[0.06] p-1.5 ring-1 ring-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
          <div className="relative rounded-[14px] ring-1 ring-white/10 overflow-hidden">
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/hero-platform.jpg"
                alt="LearnX — a student working on a laptop, a school administrator at the LearnX dashboard, and a live online lesson on a tablet"
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Logo marquee */}
      <div className="relative z-10 pb-24">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
          Powering schools across the region
        </p>
        <div className="overflow-hidden mask-fade-x">
          <div className="flex w-max marquee-track">
            {[...schools, ...schools].map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="mx-8 text-lg font-semibold tracking-tight text-slate-500 whitespace-nowrap transition-colors duration-300 hover:text-slate-300"
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
