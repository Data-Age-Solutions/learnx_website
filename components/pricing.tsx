"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

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

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="section-padding bg-white border-t border-slate-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
            Simple, transparent pricing
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 p-1 bg-slate-50 border border-slate-200 rounded-full">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                !yearly ? "bg-slate-900 text-white" : "text-slate-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                yearly ? "bg-slate-900 text-white" : "text-slate-500"
              }`}
            >
              Annual
              <span className="ml-2 text-xs text-emerald-600 font-medium">−20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl p-8 flex flex-col border bg-white ${
                plan.highlight
                  ? "border-slate-900"
                  : "border-slate-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3.5 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <p className="text-base font-bold mb-1 text-slate-900">
                {plan.name}
              </p>
              <p className="text-sm mb-6 text-slate-500">
                {plan.description}
              </p>

              <div className="mb-8">
                {plan.monthly !== null ? (
                  <>
                    <span className="text-4xl font-bold text-slate-900">
                      ${yearly ? plan.yearly : plan.monthly}
                    </span>
                    <span className="text-sm ml-1 text-slate-400">
                      / mo
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-slate-900">
                    Custom
                  </span>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check size={15} className="flex-shrink-0 text-teal-600" />
                    <span className="text-slate-600">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full text-center py-3 rounded-full text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-white text-slate-900 border border-slate-200 hover:border-slate-300"
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
