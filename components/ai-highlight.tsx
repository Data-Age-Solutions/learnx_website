"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, CalendarDays, BarChart2, FileText, Bot } from "lucide-react";

const aiFeatures = [
  {
    icon: CalendarDays,
    title: "Smart Timetabling",
    description: "Conflict-free class schedules generated in seconds using AI.",
  },
  {
    icon: BarChart2,
    title: "Predictive Analytics",
    description: "Identify at-risk students before results decline — in class or online.",
  },
  {
    icon: FileText,
    title: "Auto Report Generation",
    description: "Academic reports compiled and distributed automatically each term.",
  },
  {
    icon: Bot,
    title: "Admin Automation",
    description: "Fee reminders, attendance alerts and notices sent without manual effort.",
  },
];

export default function AIHighlight() {
  return (
    <section id="ai" className="section-padding bg-slate-50/60 border-t border-slate-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-5">
              <Sparkles size={12} className="text-teal-500" />
              One AI engine, both platforms
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-5">
              AI that does the heavy lifting
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              The same intelligence layer powers LearnX SMS and LearnX LMS —
              automating administration and surfacing insight in the classroom,
              so your team can focus on what matters most.
            </p>

            <div className="space-y-5">
              {aiFeatures.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    <Icon size={18} className="text-slate-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{title}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <Image
                src="/images/bg2.jpg"
                alt="AI-powered school operations"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
