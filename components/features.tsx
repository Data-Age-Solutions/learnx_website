"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Users,
  BookOpen,
  UserCog,
  FileBarChart2,
  ClipboardCheck,
  Brain,
  CreditCard,
  MessageSquare,
  Video,
  PencilLine,
  FileQuestion,
  LineChart,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Records",
    description: "Centralised student profiles, admissions and academic history in one place.",
    tag: "SMS",
  },
  {
    icon: ClipboardCheck,
    title: "e-Register",
    description: "Digital attendance for students and staff with real-time visibility.",
    tag: "SMS",
  },
  {
    icon: Brain,
    title: "AI Timetable",
    description: "AI-powered scheduling that optimises teachers, rooms and subjects automatically.",
    tag: "SMS",
  },
  {
    icon: CreditCard,
    title: "Billing & Finance",
    description: "Invoicing, fee management, payments and full financial reporting.",
    tag: "SMS",
  },
  {
    icon: UserCog,
    title: "Employee Management",
    description: "Staff records, payroll, HR tracking and performance data.",
    tag: "SMS",
  },
  {
    icon: FileBarChart2,
    title: "Academic Reports",
    description: "Automated report cards, grade analytics and performance insights.",
    tag: "Both",
  },
  {
    icon: BookOpen,
    title: "Course Builder",
    description: "Structure curricula, lessons and modules for every subject.",
    tag: "LMS",
  },
  {
    icon: PencilLine,
    title: "Assignments & Grading",
    description: "Submit, mark and return coursework in a single streamlined flow.",
    tag: "LMS",
  },
  {
    icon: Video,
    title: "Virtual Classrooms",
    description: "Live online classes with built-in attendance and recordings.",
    tag: "LMS",
  },
  {
    icon: FileQuestion,
    title: "Online Exams",
    description: "Question banks, timed testing and automatic marking.",
    tag: "LMS",
  },
  {
    icon: LineChart,
    title: "Progress Analytics",
    description: "Track engagement and mastery for every student, every course.",
    tag: "LMS",
  },
  {
    icon: MessageSquare,
    title: "Messaging",
    description: "Integrated SMS, email and in-app messaging for your entire school.",
    tag: "Both",
  },
];

const tagStyles: Record<string, string> = {
  SMS: "bg-teal-50 text-teal-700",
  LMS: "bg-[#F3F0FE] text-[#7C3AED]",
  Both: "bg-slate-100 text-slate-600",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
            Everything included
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            One platform. Every module.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            All the tools your school needs — administration and learning — seamlessly integrated and ready on day one.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100"
        >
          {features.map(({ icon: Icon, title, description, tag }) => (
            <motion.div
              key={title}
              variants={item}
              className="bg-white p-8 hover:bg-slate-50/80 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <Icon size={18} className="text-slate-700" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${tagStyles[tag]}`}>
                  {tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
