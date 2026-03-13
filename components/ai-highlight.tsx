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
    description: "Identify at-risk students before results decline.",
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
    <section id="ai" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/images/bg2.jpg"
                alt="AI-powered school operations"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#7C3AED] text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg">
              <Sparkles size={12} />
              AI Powered
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-500 mb-3">
              Artificial Intelligence
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              AI that does the heavy lifting
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              LearnX uses machine learning to automate your school&apos;s most time-consuming
              operational tasks — so your team can focus on what matters most.
            </p>

            <div className="space-y-5">
              {aiFeatures.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F3F0FE] flex items-center justify-center">
                    <Icon size={18} className="text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{title}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
