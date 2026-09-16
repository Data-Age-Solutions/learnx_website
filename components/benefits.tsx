"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const stats = [
  { value: "70%", label: "Reduction in admin work" },
  { value: "3×", label: "Faster report generation" },
  { value: "94%", label: "Average attendance rate" },
  { value: "500+", label: "Schools onboarded" },
];

const benefits = [
  "One unified system — no more juggling spreadsheets",
  "Real-time insights across every department",
  "Seamless parent and student communication",
  "Enterprise-grade security with cloud backup",
  "Mobile-ready for staff, parents and students",
  "Dedicated onboarding and support team",
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

export default function Benefits() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-white border-t border-slate-100">
      <div className="container-custom">
        <motion.div
          data-reveal
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-teal-700 mb-6">
            <EyebrowMark />
            Why LearnX
          </span>
          <h2 className="display-tight text-[2.2rem] sm:text-[3rem] lg:text-[3.4rem] font-bold text-navy-900 leading-[1.05] text-balance">
            Built for the way schools actually work.
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl text-pretty">
            One system behind the office, the classroom and every parent who
            needs to hear from you.
          </p>
        </motion.div>

        {/* Figures on one slab with hairlines between them. Four floating
            numbers on open page read as decoration; ruled into a single
            surface they read as a record. */}
        <motion.div
          data-reveal
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200/70 rounded-[26px] overflow-hidden ring-1 ring-slate-200/70 shadow-elevated"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-8 sm:px-7 sm:py-9">
              <p className="display-tight text-[2.25rem] sm:text-[2.75rem] font-bold text-navy-900 tabular-nums leading-none">
                {s.value}
              </p>
              <p className="mt-3 text-[13px] text-slate-500 leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[22px] overflow-hidden ring-1 ring-slate-200/80 shadow-elevated"
          >
            {/* 3:2 frame for a 3:2 photograph — nothing trimmed. */}
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/bg3.jpg"
                alt="A lecture room arranged and ready for a session"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
          </motion.div>

          <motion.ul
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-slate-200/70"
          >
            {benefits.map((b) => (
              <li
                key={b}
                className="group flex items-start gap-3.5 py-4 border-b border-slate-200/70"
              >
                <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-gradient-to-br from-teal-50 to-white ring-1 ring-teal-100 flex items-center justify-center transition-colors duration-300 group-hover:ring-teal-200">
                  <Check size={14} className="text-teal-700" />
                </span>
                <span className="text-[14.5px] text-slate-700 leading-relaxed tracking-tight">
                  {b}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
