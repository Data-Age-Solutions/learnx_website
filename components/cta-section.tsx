"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
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

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <motion.div
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-teal-400">
              <EyebrowMark />
              Get started
            </span>

            <h2 className="mt-[18px] text-[2.4rem] sm:text-[3rem] lg:text-[3.25rem] font-extrabold text-white leading-[1.02] tracking-[-0.05em] text-balance">
              Transform your school management and learning today
            </h2>

            <p className="mt-5 text-lg text-slate-400 leading-relaxed max-w-lg text-pretty">
              Join hundreds of schools already running on LearnX. Start your free
              30-day trial — no credit card needed.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
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
              {/* Quieter than the primary on purpose — two equally filled
                  buttons give the reader nothing to follow. */}
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 min-w-[170px] h-[58px] px-7 text-base font-semibold tracking-tight text-white rounded-xl ring-1 ring-white/20 transition-colors duration-300 hover:bg-white/[0.07] hover:ring-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book a Demo
              </a>
            </div>

            <ul className="mt-9 pt-7 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-3">
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

          {/* The team a school actually deals with, kept to a contained frame
              beside the copy rather than running off the edge of the band. */}
          <motion.div
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-[420px] lg:max-w-none mx-auto aspect-square rounded-[24px] overflow-hidden ring-1 ring-white/12 shadow-elevated"
          >
            <Image
              src="/images/learnx-team.jpg"
              alt="Two members of the LearnX team at the company's offices"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 420px, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
