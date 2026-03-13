"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/learnx-bg.jpg"
        alt="School hallway"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0B1F3A]/85" />

      <div className="relative z-10 py-32 px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Transform your school management today
          </h2>
          <p className="text-lg text-teal-300 mb-10">
            Join hundreds of schools already running on LearnX. Start your free
            30-day trial — no credit card needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-[#1E3A5F] bg-white rounded-xl hover:bg-teal-50 transition-colors shadow-xl"
            >
              Start Free Trial
              <ArrowRight size={16} />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors backdrop-blur"
            >
              Request Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
