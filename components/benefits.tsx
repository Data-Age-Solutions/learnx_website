"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Layers,
  LineChart,
  ShieldCheck,
} from "lucide-react";

const stats = [
  { value: "70%", label: "Reduction in admin work" },
  { value: "3×", label: "Faster report generation" },
  { value: "94%", label: "Average attendance rate" },
  { value: "500+", label: "Schools onboarded" },
];

/**
 * Three standing claims rather than six one-liners. Each row carries a title
 * and a supporting line, so the list reads as three deliberate statements
 * instead of a feature checklist — the shape Kose uses for its partner paths.
 */
const benefits = [
  {
    icon: Layers,
    title: "One system, every department",
    detail: "Admissions, classrooms and accounts in a single place — no more juggling spreadsheets.",
  },
  {
    icon: LineChart,
    title: "Everyone in the loop",
    detail: "Live figures for staff and instant messaging for parents, on any device.",
  },
  {
    icon: ShieldCheck,
    title: "Safe hands from day one",
    detail: "Enterprise-grade security, cloud backup and a dedicated onboarding team.",
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

/**
 * Counts up to the figure once it is scrolled into view. Values carry their
 * own suffix ("70%", "3×", "500+"), so only the leading number is animated.
 */
function Figure({ value }: { value: string }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Parsed once per value. Every dependency the animation effect reads has to
  // be a primitive — a fresh regex match object each render restarts the
  // count from zero on every frame, and it never settles.
  const { target, suffix, numeric } = useMemo(() => {
    const m = /^(\d+)(.*)$/.exec(value);
    return m
      ? { target: Number(m[1]), suffix: m[2], numeric: true }
      : { target: 0, suffix: "", numeric: false };
  }, [value]);

  // null means "not counting" — the figure shows its real value. The count is
  // decoration; if it never runs, the reader still sees 70%, not 0%.
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    if (!numeric || reduceMotion || !inView) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, target, numeric]);

  return (
    <span ref={ref} className="tabular-nums">
      {numeric ? `${shown ?? target}${suffix}` : value}
    </span>
  );
}

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const row = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Benefits() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative section-padding bg-navy-900 overflow-hidden">
      {/* Ground: the hero's dark grid plus one slow teal drift, so the slab
          has depth rather than reading as a flat block of navy. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hero-grid-dark" />
        <div className="absolute -top-56 -right-40 w-[760px] h-[680px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.16),transparent_70%)] blur-3xl aurora-b" />
        <div className="absolute bottom-0 -left-48 w-[560px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.14),transparent_65%)] blur-3xl aurora-a" />
      </div>

      <div className="relative z-10 container-custom">
        {/* Kose splits .85/1.15 across a 1272px canvas, which buys its picture
            ~490px. Ours is a 1072px canvas, so the same ratio would starve the
            plate to ~406px — shorter than the copy beside it. Recover the width
            from the gutter instead: a tighter gap and a squarer split land the
            image at Kose's size without pushing this section wider than the
            other nine. */}
        <div className="grid lg:grid-cols-[0.94fr_1.06fr] gap-12 lg:gap-[clamp(40px,5vw,72px)] items-center">
          {/* Portrait plate with the claim riding inside it as a pill, rather
              than on a shelf below. One object instead of two — the section
              breathes, and it is the shape Kose uses for its billboard. */}
          <motion.figure
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[560px] lg:mx-0 mx-auto aspect-[4/5] rounded-[22px] overflow-hidden ring-1 ring-white/10 shadow-elevated"
          >
            <Image
              src="/images/bg3.jpg"
              alt="A lecture room arranged and ready for a session"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 560px, 100vw"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,31,58,0.62)_100%)]"
            />

            <motion.figcaption
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-4 bottom-4 inline-flex items-center gap-2.5 rounded-full bg-navy-900/80 ring-1 ring-white/15 px-3.5 py-2.5 backdrop-blur-md"
            >
              <span
                aria-hidden
                className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_0_3px_rgba(45,212,191,0.25)]"
              />
              <span className="text-[12px] font-bold tracking-tight text-white">
                Both systems, one login
              </span>
            </motion.figcaption>
          </motion.figure>

          {/* Copy side */}
          <div>
            <motion.div
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2.5 text-[12px] font-extrabold uppercase tracking-[0.16em] text-teal-400 mb-[18px]">
                <EyebrowMark />
                Why LearnX
              </span>
              <h2 className="text-[2.5rem] sm:text-[3.25rem] lg:text-[4.25rem] font-extrabold text-white leading-[0.98] tracking-[-0.055em] text-balance">
                Built for the way schools actually work.
              </h2>
              <p className="mt-5 text-[1.0625rem] sm:text-[1.25rem] text-slate-400 leading-[1.6] max-w-[560px] text-pretty">
                One system behind the office, the classroom and every parent who
                needs to hear from you.
              </p>
            </motion.div>

            <motion.ul
              variants={reduceMotion ? undefined : list}
              initial={reduceMotion ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-[34px] border-t border-white/10"
            >
              {benefits.map(({ icon: Icon, title, detail }) => (
                <motion.li
                  data-reveal
                  key={title}
                  variants={reduceMotion ? undefined : row}
                  className="group grid grid-cols-[48px_1fr] items-center gap-3.5 min-h-[92px] py-4 pl-0 border-b border-white/10 transition-[padding,border-color] duration-300 hover:pl-2.5 hover:border-white/20"
                >
                  <span className="w-12 h-12 rounded-[14px] bg-white/[0.06] ring-1 ring-white/10 grid place-items-center transition-all duration-300 group-hover:bg-teal-500/15 group-hover:ring-teal-400/40">
                    <Icon
                      size={23}
                      strokeWidth={1.9}
                      className="text-teal-400 transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>
                  <span>
                    <span className="block text-[16px] font-semibold tracking-tight text-white">
                      {title}
                    </span>
                    <span className="block mt-1 text-[13px] text-slate-400 leading-relaxed">
                      {detail}
                    </span>
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              data-reveal
              href="#features"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="group mt-8 inline-flex items-center gap-2 text-[14.5px] font-semibold tracking-tight text-teal-400 transition-colors duration-300 hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
            >
              See everything included
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </div>

        {/* The four figures, counting up as they arrive */}
        <motion.div
          data-reveal
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 lg:mt-14 pt-7 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 sm:divide-x sm:divide-white/10"
        >
          {stats.map((s) => (
            <div key={s.label} className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <p className="display-tight text-[1.75rem] sm:text-[2rem] font-bold text-white leading-none">
                <Figure value={s.value} />
              </p>
              <p className="mt-1.5 text-[12px] text-slate-400 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
