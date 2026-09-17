"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/** Figures carried over from elsewhere on the page, not new claims. */
const reassurances = [
  "500+ schools onboarded",
  "30-day free trial",
  "No credit card required",
];

/** Small downward triangle that opens every section eyebrow. */
function EyebrowMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 10 8"
      className="w-2.5 h-2 fill-current"
      focusable="false"
    >
      <path d="M0 0h10L5 8z" />
    </svg>
  );
}

export default function CTASection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#05101F] py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hero-grid-dark" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[440px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.16),transparent_70%)] blur-3xl aurora-b" />
      </div>

      <motion.div
        data-reveal
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative container-custom text-center max-w-[800px] mx-auto"
      >
        <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-teal-400">
          <EyebrowMark />
          Get started
        </span>

        <h2 className="mt-[18px] text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] font-extrabold text-white leading-[1] tracking-[-0.06em] text-balance">
          Transform your school management and learning today
        </h2>

        <p className="mt-5 text-lg text-slate-400 leading-relaxed max-w-xl mx-auto text-pretty">
          Join hundreds of schools already running on LearnX. Start your free
          30-day trial — no credit card needed.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-2 min-w-[170px] h-[58px] px-7 text-base font-semibold tracking-tight text-navy-900 bg-white rounded-xl transition-all duration-300 hover:bg-slate-100 motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start Free Trial
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          {/* Quieter than the primary on purpose — two equally filled buttons
              give the reader nothing to follow. */}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 min-w-[170px] h-[58px] px-7 text-base font-semibold tracking-tight text-white rounded-xl ring-1 ring-white/20 transition-colors duration-300 hover:bg-white/[0.07] hover:ring-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a Demo
          </a>
        </div>

        <ul className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {reassurances.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400"
            >
              <span aria-hidden className="w-1 h-1 rounded-full bg-teal-400" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
