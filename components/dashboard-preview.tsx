"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, BarChart3, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, label: "Student Profiles", value: "2,847", color: "text-teal-600 bg-teal-50" },
  { icon: TrendingUp, label: "Avg. Grade", value: "87.4%", color: "text-emerald-600 bg-emerald-50" },
  { icon: Clock, label: "Attendance Rate", value: "94.8%", color: "text-violet-600 bg-violet-50" },
  { icon: BarChart3, label: "Reports Generated", value: "1,204", color: "text-amber-600 bg-amber-50" },
];

export default function DashboardPreview() {
  return (
    <section className="section-padding bg-white border-t border-slate-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
              Live Dashboard
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-5">
              A command centre for your entire school
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Real-time dashboards surface what matters — student performance, attendance trends,
              financial summaries and staff activity — in a single, beautifully organised view.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900 leading-none">{value}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-teal-600 transition-colors"
            >
              See full feature set <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200">
              <Image
                src="/images/bg1.jpg"
                alt="LearnX analytics dashboard"
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-slate-200 px-5 py-3">
              <p className="text-xs text-slate-500 mb-0.5">Student progress</p>
              <p className="text-xl font-bold text-slate-900">
                ↑ 14%{" "}
                <span className="text-sm font-medium text-emerald-500">this term</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
