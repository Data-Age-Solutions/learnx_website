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
  Check,
  Layers,
  LineChart,
  MessageSquare,
  ShieldCheck,
  Smartphone,
  LifeBuoy,
} from "lucide-react";

const stats = [
  { value: "70%", label: "Reduction in admin work" },
  { value: "3×", label: "Faster report generation" },
  { value: "94%", label: "Average attendance rate" },
  { value: "500+", label: "Schools onboarded" },
];

const benefits = [
  { icon: Layers, text: "One unified system — no more juggling spreadsheets" },
  { icon: LineChart, text: "Real-time insights across every department" },
  { icon: MessageSquare, text: "Seamless parent and student communication" },
  { icon: ShieldCheck, text: "Enterprise-grade security with cloud backup" },
  { icon: Smartphone, text: "Mobile-ready for staff, parents and students" },
  { icon: LifeBuoy, text: "Dedicated onboarding and support team" },
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
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Picture card: photograph on top, a dark shelf beneath it holding
              one standing claim — the shape Kose uses for its trust panel. */}
          <motion.div
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[26px] bg-white/[0.04] ring-1 ring-white/10 p-3 shadow-elevated"
          >
            <div className="relative aspect-[3/2] rounded-[18px] overflow-hidden ring-1 ring-white/10">
              <Image
                src="/images/bg3.jpg"
                alt="A lecture room arranged and ready for a session"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,31,58,0.55)_100%)]"
              />
            </div>

            <motion.div
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3 flex items-center gap-3.5 rounded-2xl bg-navy-800/70 ring-1 ring-white/10 px-4 py-3.5 backdrop-blur-sm"
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center shadow-[0_8px_20px_-8px_rgba(6,182,212,0.9)]">
                <Check size={17} className="text-navy-900" strokeWidth={3} />
              </span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  On day one
                </span>
                <span className="block text-[14.5px] font-semibold tracking-tight text-white">
                  Both systems, one login
                </span>
              </span>
            </motion.div>
          </motion.div>

          {/* Copy side */}
          <div>
            <motion.div
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-teal-400 mb-6">
                <EyebrowMark />
                Why LearnX
              </span>
              <h2 className="display-tight text-[2.2rem] sm:text-[3rem] lg:text-[3.4rem] font-bold text-white leading-[1.05] text-balance">
                Built for the way schools actually work.
              </h2>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg text-pretty">
                One system behind the office, the classroom and every parent who
                needs to hear from you.
              </p>
            </motion.div>

            <motion.ul
              variants={reduceMotion ? undefined : list}
              initial={reduceMotion ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-9 border-t border-white/10"
            >
              {benefits.map(({ icon: Icon, text }) => (
                <motion.li
                  data-reveal
                  key={text}
                  variants={reduceMotion ? undefined : row}
                  className="group flex items-center gap-4 py-4 border-b border-white/10 transition-colors duration-300 hover:border-white/20"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-teal-500/15 group-hover:ring-teal-400/40">
                    <Icon
                      size={16}
                      className="text-teal-400 transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>
                  <span className="text-[14.5px] text-slate-300 leading-relaxed tracking-tight transition-colors duration-300 group-hover:text-white">
                    {text}
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
          className="mt-14 lg:mt-20 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-y-9 lg:divide-x lg:divide-white/10"
        >
          {stats.map((s) => (
            <div key={s.label} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <p className="display-tight text-[2.5rem] sm:text-[3rem] font-bold text-white leading-none">
                <Figure value={s.value} />
              </p>
              <p className="mt-3 text-[13px] text-slate-400 leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
