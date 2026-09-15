"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Users,
  ClipboardCheck,
  Brain,
  CreditCard,
  UserCog,
  FileBarChart2,
  BookOpen,
  PencilLine,
  Video,
  FileQuestion,
  Library,
  LineChart,
} from "lucide-react";

const products = [
  {
    key: "sms",
    tab: "School Management",
    eyebrow: "School Management System",
    heading: "Run the whole school from one place",
    description:
      "Admissions, attendance, finance and staff — LearnX SMS keeps every administrative thread of your school connected and up to date.",
    image: "/images/bg1.jpg",
    imageAlt: "LearnX school management dashboard",
    features: [
      { icon: Users, title: "Student Records", description: "Admissions, profiles and academic history in one file." },
      { icon: ClipboardCheck, title: "e-Register", description: "Digital attendance with real-time visibility." },
      { icon: Brain, title: "AI Timetable", description: "Conflict-free scheduling generated automatically." },
      { icon: CreditCard, title: "Billing & Finance", description: "Invoicing, fees and financial reporting." },
      { icon: UserCog, title: "Employee Management", description: "Staff records, payroll and HR in sync." },
      { icon: FileBarChart2, title: "Academic Reports", description: "Report cards and grade analytics, automated." },
    ],
  },
  {
    key: "lms",
    tab: "Learning Management",
    eyebrow: "Learning Management System",
    heading: "Teaching and learning, brought online",
    description:
      "Courses, assignments and live classes in one experience — LearnX LMS gives teachers and students a modern place to work together.",
    image: "/images/bg2.jpg",
    imageAlt: "LearnX learning management dashboard",
    features: [
      { icon: BookOpen, title: "Course Builder", description: "Structure curricula, lessons and modules with ease." },
      { icon: PencilLine, title: "Assignments & Grading", description: "Submit, grade and return work in one flow." },
      { icon: Video, title: "Virtual Classrooms", description: "Live classes with attendance built in." },
      { icon: FileQuestion, title: "Online Exams", description: "Question banks, auto-marking and secure testing." },
      { icon: Library, title: "Content Library", description: "Video, documents and resources, organised." },
      { icon: LineChart, title: "Progress Analytics", description: "Track mastery and engagement per student." },
    ],
  },
] as const;

const panelVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function ProductSwitcher() {
  const [active, setActive] = useState<(typeof products)[number]["key"]>("sms");
  const current = products.find((p) => p.key === active)!;

  return (
    <section id="platform" className="section-padding bg-white border-t border-slate-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
            One platform, two systems
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Everything a school needs to run and teach
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-14">
          <div className="relative inline-flex items-center gap-1 p-1 rounded-full border border-slate-200 bg-slate-50">
            {products.map((p) => (
              <button
                key={p.key}
                onClick={() => setActive(p.key)}
                className={`relative z-10 px-5 py-2.5 text-sm font-semibold rounded-full transition-colors ${
                  active === p.key ? "text-white" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {active === p.key && (
                  <motion.span
                    layoutId="tab-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-slate-900 -z-10"
                  />
                )}
                {p.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid lg:grid-cols-2 gap-14 items-center"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
                {current.eyebrow}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                {current.heading}
              </h3>
              <p className="text-base text-slate-500 leading-relaxed mb-8">
                {current.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {current.features.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                      <Icon size={16} className="text-slate-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{title}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Browser-chrome framed mockup */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
