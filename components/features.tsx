"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

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

// The twelve modules, grouped into four panels. Twelve equal cards give a
// reader no order to follow; four groups do, and every module still appears
// by name as a chip.
const panels = [
  {
    index: "001",
    title: "School administration",
    description:
      "Admissions, daily attendance and the timetable that holds the week together — kept current without anyone re-typing the same record twice.",
    modules: ["Student Records", "e-Register", "AI Timetable"],
    image: "/images/learnx-bg.jpg",
    imageAlt: "A classroom set up and ready for the school day",
    tone: "light" as const,
  },
  {
    index: "002",
    title: "Staff, finance and families",
    description:
      "Pay your people, invoice your families and reach every parent from the same place, with the numbers reconciled as you go.",
    modules: ["Employee Management", "Billing & Finance", "Messaging"],
    image: "/images/hero-key-visual.jpg",
    imageAlt: "LearnX reporting shown across a desktop screen and a tablet",
    tone: "tint" as const,
  },
  {
    index: "003",
    title: "Teaching and learning",
    description:
      "Build the curriculum, run the lesson and mark the work without leaving the platform — in the room or online.",
    modules: ["Course Builder", "Assignments & Grading", "Virtual Classrooms"],
    image: "/images/bg1.jpg",
    imageAlt: "Students working on laptops at their desks during a lesson",
    tone: "light" as const,
  },
  {
    index: "004",
    title: "Assessment and insight",
    description:
      "Examine, mark and measure, so progress is visible to teachers and parents long before the end of term.",
    modules: ["Online Exams", "Progress Analytics", "Academic Reports"],
    image: "/images/bg3.jpg",
    imageAlt: "A lecture room arranged for an examination sitting",
    tone: "tint" as const,
  },
];

export default function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="features" className="section-padding bg-[#F5F5F3]">
      <div className="container-custom">
        <motion.div
          data-reveal
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-teal-700 mb-6">
            <EyebrowMark />
            Everything included
          </span>
          <h2 className="display-tight text-[2.2rem] sm:text-[3rem] lg:text-[3.4rem] font-bold text-navy-900 leading-[1.05] text-balance">
            One platform. Every module.
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl text-pretty">
            All the tools your school needs — administration and learning —
            integrated and ready on day one.
          </p>
        </motion.div>

        {/* Stacking panels: each one pins under the last, so the panel you are
            reading stays put while the next slides up over it. */}
        <div className="space-y-5">
          {panels.map((panel, i) => (
            <div
              key={panel.index}
              className="lg:sticky"
              style={{ top: `${104 + i * 22}px` }}
            >
              <motion.article
                data-reveal
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-[5fr_6fr] rounded-[28px] overflow-hidden shadow-elevated ring-1 ${
                  panel.tone === "tint"
                    ? "bg-[#ECF8FA] ring-teal-100"
                    : "bg-white ring-slate-200/70"
                }`}
              >
                <div className="flex flex-col justify-between gap-10 p-8 sm:p-10 lg:p-12 lg:min-h-[420px]">
                  <div>
                    <span className="block text-[13px] font-bold tabular-nums tracking-[0.14em] text-teal-600 mb-5">
                      {panel.index}
                    </span>
                    <h3 className="display-tight text-[1.75rem] sm:text-[2.1rem] font-bold text-navy-900 leading-[1.1] text-balance">
                      {panel.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-[15px] text-slate-600 leading-relaxed max-w-md text-pretty">
                      {panel.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 mt-6">
                      {panel.modules.map((m) => (
                        <li
                          key={m}
                          className="px-3 py-1.5 rounded-full bg-white/80 ring-1 ring-slate-200 text-[12.5px] font-semibold tracking-tight text-navy-900"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-full">
                  <Image
                    src={panel.image}
                    alt={panel.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 620px, 100vw"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/[0.06]"
                  />
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
