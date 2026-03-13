"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Benefits() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Image + list */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/images/bg3.jpg"
                alt="Modern school environment"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-500 mb-3">
              Why LearnX
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              Built for the way schools actually work
            </h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-teal-600" fill="none" viewBox="0 0 12 10">
                      <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
