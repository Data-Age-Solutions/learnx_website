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
  Newspaper,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Records",
    description: "Centralised student profiles, admissions and academic history in one place.",
  },
  {
    icon: BookOpen,
    title: "Library Management",
    description: "Book inventory, digital catalogue, lending and overdue tracking.",
  },
  {
    icon: UserCog,
    title: "Employee Management",
    description: "Staff records, payroll, HR tracking and performance data.",
  },
  {
    icon: FileBarChart2,
    title: "Academic Reports",
    description: "Automated report cards, grade analytics and performance insights.",
  },
  {
    icon: ClipboardCheck,
    title: "e-Register",
    description: "Digital attendance for students and staff with real-time visibility.",
  },
  {
    icon: Brain,
    title: "AI Timetable",
    description: "AI-powered scheduling that optimises teachers, rooms and subjects automatically.",
  },
  {
    icon: CreditCard,
    title: "Billing & Finance",
    description: "Invoicing, fee management, payments and full financial reporting.",
  },
  {
    icon: MessageSquare,
    title: "Messaging",
    description: "Integrated SMS, email and internal messaging for your entire school.",
  },
  {
    icon: Newspaper,
    title: "Newsletters",
    description: "Send announcements and newsletters directly to parents and students.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
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
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-500 mb-3">
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            One platform. Every module.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            All the tools your school needs, seamlessly integrated and ready on day one.
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
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="bg-white p-8 hover:bg-slate-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                <Icon size={20} className="text-teal-600" />
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
