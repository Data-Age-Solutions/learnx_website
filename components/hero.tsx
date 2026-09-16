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
      {/* Split band: copy held to the page gutter on the left, photography
          running to the viewport edge on the right. */}
      <div className="relative">
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
          <Image
            src="/images/hero-platform.jpg"
            alt="LearnX — a student working on a laptop, a school administrator at the LearnX dashboard, and a live online lesson on a tablet"
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />

          {/* Thin ring with a teal marker — a quiet piece of geometry in the
              corner, so the photo's top edge isn't left completely empty. */}
          <span
            aria-hidden
            className="absolute top-12 right-16 w-24 h-24 rounded-full ring-1 ring-white/50"
          >
            <span className="absolute bottom-3 right-1 w-2.5 h-2.5 rounded-full bg-teal-400" />
          </span>

          {/* Floating card, restating the marquee's claim over the image */}
          <div className="absolute bottom-10 right-10 flex items-center gap-3 pl-3 pr-5 py-3 rounded-2xl bg-white/95 backdrop-blur-sm shadow-elevated">
            <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-teal-500/10 ring-1 ring-teal-500/20 flex items-center justify-center">
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

        <div className="relative container-custom">
          <div className="lg:w-1/2 lg:pr-10 pt-28 pb-12 lg:py-32">
            <motion.span
              custom={0}
              variants={fade}
              data-reveal
              initial={reduceMotion ? false : "hidden"}
              animate="show"
              className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-teal-700 mb-7"
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
              className="display-tight text-[2.5rem] sm:text-[3.1rem] lg:text-[3.4rem] font-bold text-navy-900 leading-[1.03] mb-7 text-balance"
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
              className="text-lg text-slate-500 leading-[1.6] tracking-[-0.011em] max-w-[34rem] mb-9 text-pretty"
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
              className="mt-10 pt-7 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            >
              {proofPoints.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2.5">
                  <Icon size={16} className="flex-shrink-0 text-teal-600" />
                  <span className="text-[13px] font-semibold tracking-tight text-navy-900">
                    {label}
                  </span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Phone and tablet: the photo drops below the copy at full width */}
        <div className="lg:hidden relative w-full aspect-[4/3]">
          <Image
            src="/images/hero-platform.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute bottom-5 left-5 flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-sm shadow-elevated">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/10 ring-1 ring-teal-500/20 flex items-center justify-center">
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
