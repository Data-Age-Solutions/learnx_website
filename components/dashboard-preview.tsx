"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BarChart3, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, label: "Student Profiles", value: "2,847" },
  { icon: TrendingUp, label: "Avg. Grade", value: "87.4%" },
  { icon: Clock, label: "Attendance Rate", value: "94.8%" },
  { icon: BarChart3, label: "Reports Generated", value: "1,204" },
];

/**
 * Heading set on painted slabs. Two stacked layers: the first paints a box
 * behind every line and shows no text, the second draws the text over the lot.
 * Drawing them separately is what stops the boxes of adjacent lines clipping
 * each other's descenders where they overlap.
 */
function PaintedHeading({ children }: { children: string }) {
  return (
    <h2 className="max-w-[36rem] text-[2.35rem] sm:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.45rem] font-normal leading-[0.98] tracking-normal text-[hsl(40_23%_97.5%)]">
      <span className="grid">
        <span aria-hidden className="col-start-1 row-start-1 text-transparent">
          <span className="box-decoration-clone bg-[#232323] px-3 py-1 text-transparent">
            {children}
          </span>
        </span>
        <span className="relative z-10 col-start-1 row-start-1">
          <span className="box-decoration-clone px-3 py-1">{children}</span>
        </span>
      </span>
    </h2>
  );
}

export default function DashboardPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white border-t border-slate-100 py-10 md:py-12 overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] md:grid-cols-2 md:min-h-[34rem] md:gap-10 lg:min-h-[38rem] lg:gap-16 xl:gap-24">
        <div className="flex items-center px-5 sm:px-10 md:px-12 lg:px-16 py-14 md:py-20">
          <motion.div
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[32rem] space-y-7 sm:space-y-8"
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-teal-600">
              Live Dashboard
            </p>

            <PaintedHeading>
              A command centre for your entire school
            </PaintedHeading>

            <p className="text-base leading-relaxed text-[#6f675d] text-pretty">
              Real-time dashboards surface what matters — student performance,
              attendance trends, financial summaries and staff activity — in a{" "}
              <em className="italic">single, organised view</em>.
            </p>

            {/* Figures as type on a hairline grid. Bordered tiles with coloured
                chips read as a widget rack; this reads as a readout. */}
            <div className="grid grid-cols-2 gap-x-8 border-t border-slate-900/10">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 py-4 border-b border-slate-900/10"
                >
                  <Icon size={15} className="flex-shrink-0 text-slate-400" />
                  <span>
                    <span className="block text-[17px] font-bold text-slate-900 leading-none tracking-tight">
                      {value}
                    </span>
                    <span className="block mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                      {label}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#2d2a26] underline decoration-teal-500 decoration-2 underline-offset-4 transition-colors hover:text-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500"
            >
              See full feature set
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* The picture runs off the right edge of the screen, so the band never
            reads as a boxed-in card. */}
        <div className="h-[26rem] overflow-hidden md:h-full md:-mr-[max(0px,calc((100vw-1400px)/2))]">
          <div className="relative h-full w-full overflow-hidden bg-slate-100">
            <Image
              src="/images/admin-payroll-billing.jpg"
              alt="A school administrator working across staff payroll, family billing and parent communication screens"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 50vw, 100vw"
            />

            {/* The standing figure, riding the corner of the photograph. */}
            <motion.div
              data-reveal
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: 96, y: 24, scale: 0.95 }
              }
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 right-0 w-[92%] sm:w-[82%] lg:w-[62%] xl:w-[58%] bg-white p-3 sm:p-4 shadow-[0_28px_80px_-50px_rgba(45,42,38,0.85)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                Student progress
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900 tracking-tight">
                ↑ 14%{" "}
                <span className="text-sm font-medium text-emerald-600">
                  this term
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
