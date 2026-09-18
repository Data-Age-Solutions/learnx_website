"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CalendarDays, BarChart2, FileText, Bot } from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "Smart Timetabling",
    description:
      "Conflict-free class schedules generated in seconds using AI — teachers, rooms and subjects resolved together.",
  },
  {
    icon: BarChart2,
    title: "Predictive Analytics",
    description:
      "Identify at-risk students before results decline, whether they are sitting in class or learning online.",
  },
  {
    icon: FileText,
    title: "Auto Report Generation",
    description:
      "Academic reports compiled, checked and distributed automatically at the end of every term.",
  },
  {
    icon: Bot,
    title: "Admin Automation",
    description:
      "Fee reminders, attendance alerts and school notices sent on time, without anyone chasing them.",
  },
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

export default function AIHighlight() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section id="ai" className="section-padding bg-white">
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
            One AI engine, both platforms
          </span>
          <h2 className="display-tight text-[2.2rem] sm:text-[3rem] lg:text-[3.4rem] font-bold text-navy-900 leading-[1.05] text-balance">
            AI that does the heavy lifting.
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl text-pretty">
            The same intelligence layer powers LearnX SMS and LearnX LMS, so
            your team can focus on what matters most.
          </p>
        </motion.div>

        {/* Steps on the left, one picture frame on the right whose caption
            follows the step you are reading. */}
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-[minmax(0,460px)_1fr] gap-8 lg:gap-12 items-start lg:items-stretch">
          <div className="space-y-3">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <button
                  key={step.title}
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  className={`w-full text-left rounded-2xl p-5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
                    isActive
                      ? "bg-teal-50/70 ring-1 ring-teal-200"
                      : "bg-white ring-1 ring-slate-200/80 hover:ring-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold tabular-nums transition-colors duration-300 ${
                        isActive
                          ? "bg-teal-600 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[15px] font-semibold tracking-tight text-navy-900">
                      {step.title}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        data-reveal
                        initial={
                          reduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden text-[13.5px] text-slate-600 leading-relaxed"
                      >
                        <span className="block pt-2.5 pl-12">
                          {step.description}
                        </span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <div className="relative rounded-[22px] overflow-hidden ring-1 ring-slate-200/80 shadow-elevated lg:h-full">
            <div className="relative aspect-[3/2] lg:aspect-auto lg:h-full">
              <Image
                src="/images/bg2.jpg"
                alt="Two school administrators working side by side on laptops"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 640px, 100vw"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,31,58,0.35)_100%)]"
              />
            </div>

            {/* Caption bar, carrying whichever step is open */}
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl glass-panel-dark ring-1 ring-white/10">
                <span className="flex-shrink-0 px-2 py-1 rounded-md bg-teal-500 text-[11px] font-bold tabular-nums text-navy-900">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.title}
                    data-reveal
                    initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-[13px] font-semibold tracking-tight text-white"
                  >
                    {current.title}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
