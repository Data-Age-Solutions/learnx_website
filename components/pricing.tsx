"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small schools getting started.",
    monthly: 49,
    yearly: 39,
    features: [
      "Up to 300 students",
      "Student records (SMS)",
      "e-Register (attendance)",
      "Course builder & assignments (LMS)",
      "Basic email messaging",
      "Library management",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Professional",
    description: "The most popular plan for growing schools.",
    monthly: 149,
    yearly: 119,
    features: [
      "Up to 1,500 students",
      "Everything in Starter",
      "AI Timetable Scheduling (SMS)",
      "Virtual classrooms & online exams (LMS)",
      "Billing & Finance module",
      "SMS + email messaging",
      "Advanced analytics",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Unlimited scale with dedicated support.",
    monthly: null,
    yearly: null,
    features: [
      "Unlimited students",
      "Everything in Professional",
      "Full LMS content library & progress analytics",
      "QuickBooks & Pastel integration",
      "Custom branding",
      "Dedicated account manager",
    ],
    cta: "Contact sales",
    highlight: false,
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

const cycles = [
  { key: "monthly" as const, label: "Monthly" },
  { key: "yearly" as const, label: "Annual" },
];

export default function Pricing() {
  const reduceMotion = useReducedMotion();
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");
  const yearly = cycle === "yearly";

  return (
    <section
      id="pricing"
      className="section-padding bg-white border-t border-slate-100"
    >
      <div className="container-custom">
        <motion.div
          data-reveal
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-teal-700 mb-6">
            <EyebrowMark />
            Pricing
          </span>
          <h2 className="display-tight text-[2.2rem] sm:text-[3rem] lg:text-[3.4rem] font-bold text-navy-900 leading-[1.05] text-balance">
            Simple, transparent pricing.
          </h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl mx-auto text-pretty">
            Both systems are included on every plan. Choose the size of school
            you are running.
          </p>

          {/* Billing switch, built like the tab pill used elsewhere */}
          <div
            role="tablist"
            aria-label="Billing period"
            className="mt-9 inline-flex items-center gap-1 p-1.5 rounded-full bg-white ring-1 ring-slate-200/80 shadow-soft"
          >
            {cycles.map((c) => {
              const isActive = cycle === c.key;
              return (
                <button
                  key={c.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCycle(c.key)}
                  className={`relative z-10 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
                    isActive ? "text-white" : "text-slate-500 hover:text-navy-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="billing-pill"
                      aria-hidden
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-navy-900 shadow-[0_8px_20px_-8px_rgba(11,31,58,0.6)]"
                    />
                  )}
                  {c.label}
                  {c.key === "yearly" && (
                    <span
                      className={`text-[11px] font-bold tracking-tight ${
                        isActive ? "text-teal-300" : "text-teal-600"
                      }`}
                    >
                      −20%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative flex flex-col overflow-hidden rounded-[26px] p-8 lg:p-9 ${
                plan.highlight
                  ? "bg-navy-900 shadow-elevated md:-mt-5"
                  : "bg-white ring-1 ring-slate-200/70 shadow-soft"
              }`}
            >
              {/* Gradient hairline along the top edge of the chosen plan —
                  the same teal-to-violet pair used for emphasis elsewhere. */}
              {plan.highlight && (
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE] to-[#A78BFA]/70"
                />
              )}

              <div className="flex items-center justify-between gap-3 mb-2">
                <p
                  className={`text-[15px] font-semibold tracking-tight ${
                    plan.highlight ? "text-white" : "text-navy-900"
                  }`}
                >
                  {plan.name}
                </p>
                {plan.highlight && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/15 ring-1 ring-teal-400/30 text-[10px] font-bold uppercase tracking-[0.12em] text-teal-300">
                    Most popular
                  </span>
                )}
              </div>

              <p
                className={`text-[13.5px] leading-relaxed ${
                  plan.highlight ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-7 mb-8 flex items-baseline gap-1.5">
                {plan.monthly !== null ? (
                  <>
                    <span
                      className={`display-tight text-[3rem] font-bold tabular-nums leading-none ${
                        plan.highlight ? "text-white" : "text-navy-900"
                      }`}
                    >
                      ${yearly ? plan.yearly : plan.monthly}
                    </span>
                    <span
                      className={`text-[13px] font-medium ${
                        plan.highlight ? "text-slate-400" : "text-slate-400"
                      }`}
                    >
                      / month
                    </span>
                  </>
                ) : (
                  <span
                    className={`display-tight text-[3rem] font-bold leading-none ${
                      plan.highlight ? "text-white" : "text-navy-900"
                    }`}
                  >
                    Custom
                  </span>
                )}
              </div>

              {/* Ruled rows, the same specification-sheet treatment the
                  platform and module sections use. */}
              <ul
                className={`flex-1 border-t ${
                  plan.highlight ? "border-white/10" : "border-slate-200/70"
                }`}
              >
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 py-3 border-b ${
                      plan.highlight ? "border-white/10" : "border-slate-200/70"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-md flex items-center justify-center ${
                        plan.highlight
                          ? "bg-white/[0.07] ring-1 ring-white/10"
                          : "bg-gradient-to-br from-teal-50 to-white ring-1 ring-teal-100"
                      }`}
                    >
                      <Check
                        size={13}
                        className={
                          plan.highlight ? "text-teal-400" : "text-teal-700"
                        }
                      />
                    </span>
                    <span
                      className={`text-[13.5px] leading-relaxed tracking-tight ${
                        plan.highlight ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 block w-full text-center px-6 py-3.5 rounded-full text-[14.5px] font-semibold tracking-tight transition-all duration-300 motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.highlight
                    ? "bg-white text-navy-900 hover:bg-slate-100 focus-visible:outline-white"
                    : "bg-navy-900 text-white hover:bg-navy-800 focus-visible:outline-navy-900"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
