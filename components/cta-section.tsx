"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-20 sm:py-24 text-center"
        >
          {/* Subtle blurred accent orb */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-teal-500/30 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#7C3AED]/20 to-transparent blur-3xl" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              Transform your school management and learning today
            </h2>
            <p className="text-lg text-slate-300 mb-10">
              Join hundreds of schools already running on LearnX. Start your free
              30-day trial — no credit card needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight size={16} />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
