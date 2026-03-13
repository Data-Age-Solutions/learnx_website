"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/learnx-bg2.jpg"
        alt="LearnX platform background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/85 via-[#1E3A5F]/65 to-[#0B1F3A]/90" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center pt-24 pb-20">
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/80 text-sm font-medium mb-8"
        >
          Trusted by 500+ schools worldwide
        </motion.div>

        <motion.h1
          custom={0.1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
        >
          Run Your Entire School
          <br />
          on One{" "}
          <span className="text-gradient-brand">Intelligent</span> Platform
        </motion.h1>

        <motion.p
          custom={0.2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          LearnX unifies administration, academics, communication and finance
          for modern schools — powered by AI.
        </motion.p>

        <motion.div
          custom={0.3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-teal-500 rounded-xl hover:bg-teal-600 transition-colors shadow-lg shadow-[#06B6D4]/30"
          >
            Request Demo
            <ArrowRight size={16} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-white/10 backdrop-blur border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
          >
            Explore Features
          </a>
        </motion.div>

        <motion.div
          custom={0.4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center justify-center gap-5 text-sm text-white/50"
        >
          {[
            "No credit card required",
            "Free 30-day trial",
            "Setup in minutes",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-teal-400" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
