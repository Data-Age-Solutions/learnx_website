"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CreditCard, CalendarClock, Rocket } from "lucide-react";
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
  { icon: CreditCard, label: "No credit card required" },
  { icon: CalendarClock, label: "Free 30-day trial" },
  { icon: Rocket, label: "Setup in minutes" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-white">
      {/* Split band. The grid is full-width, so the picture cell reaches the
          viewport edge on its own; the copy cell carries the page gutter as
          padding instead. The cell is a 3:2 box holding a 3:2 photograph, so
          the key visual is shown whole — poured into a taller column, object-
          cover was eating a third of its width, flag and tablet included. */}
      <div className="pt-16 lg:grid lg:grid-cols-2 lg:items-center">
        <div className="px-5 sm:px-8 lg:pl-[max(2rem,calc((100vw-72rem)/2+2.5rem))] lg:pr-12 pt-12 pb-10 lg:py-14">
          <motion.span
            custom={0}
            variants={fade}
            data-reveal
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-teal-700 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            Trusted by 500+ schools worldwide
          </motion.span>

          <motion.h1
            custom={0.1}
            variants={fade}
            data-reveal
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            className="display-tight text-[2.5rem] sm:text-[3.1rem] lg:text-[3.3rem] font-bold text-navy-900 leading-[1.04] mb-6 text-balance"
          >
            One platform for school management and{" "}
            <em className="not-italic lg:italic text-teal-600">
              online learning.
            </em>
          </motion.h1>

          <motion.p
            custom={0.2}
            variants={fade}
            data-reveal
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            className="text-[17px] text-slate-500 leading-[1.6] tracking-[-0.011em] max-w-[32rem] mb-8 text-pretty"
          >
            LearnX brings your school&apos;s administration and your classrooms
            online — two systems, one intelligent platform.
          </motion.p>

          <motion.div
            custom={0.3}
            variants={fade}
            data-reveal
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#pricing"
              className="sheen group relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold tracking-tight text-white bg-navy-900 rounded-full transition-all duration-300 hover:bg-navy-800 motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
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
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold tracking-tight text-navy-900 bg-white rounded-full ring-1 ring-slate-300 transition-all duration-300 hover:ring-slate-400 hover:bg-slate-50 motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
            >
              Explore the Platform
            </a>
          </motion.div>

          <motion.div
            custom={0.4}
            variants={fade}
            data-reveal
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-x-7 gap-y-3"
          >
            {proofPoints.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2.5">
                <Icon size={16} className="flex-shrink-0 text-teal-600" />
                <span className="text-[13px] font-semibold tracking-tight text-navy-900 whitespace-nowrap">
                  {label}
                </span>
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative w-full aspect-[3/2]">
          <Image
            src="/images/hero-platform.jpg"
            alt="LearnX — a student working on a laptop, a school administrator at the LearnX dashboard, and a live online lesson on a tablet"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />

          {/* Thin ring with a teal marker — a quiet piece of geometry in the
              corner, so the photo's top edge isn't left completely empty. */}
          <span
            aria-hidden
            className="hidden lg:block absolute top-10 right-14 w-24 h-24 rounded-full ring-1 ring-white/50"
          >
            <span className="absolute bottom-3 right-1 w-2.5 h-2.5 rounded-full bg-teal-400" />
          </span>

          {/* Floating card, restating the marquee's claim over the image */}
          <div className="absolute bottom-5 left-5 lg:left-auto lg:right-8 lg:bottom-8 flex items-center gap-3 pl-3 pr-5 py-2.5 lg:py-3 rounded-2xl bg-white/95 backdrop-blur-sm shadow-elevated">
            <span className="flex-shrink-0 w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-teal-500/10 ring-1 ring-teal-500/20 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
            </span>
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Powering schools
              </span>
              <span className="block text-sm font-semibold tracking-tight text-navy-900">
                Across the region
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Logo marquee */}
      <div className="border-t border-slate-100 bg-[#FAFAF9] py-12">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-6">
          Powering schools across the region
        </p>
        <div className="overflow-hidden mask-fade-x">
          <div className="flex w-max marquee-track">
            {[...schools, ...schools].map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="mx-8 text-lg font-semibold tracking-tight text-slate-400 whitespace-nowrap transition-colors duration-300 hover:text-navy-900"
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
