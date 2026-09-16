"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
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
    kicker: "Admissions · Attendance · Finance · Staff",
    heading: "Run the whole school from one place",
    description:
      "Admissions, attendance, finance and staff — LearnX SMS keeps every administrative thread of your school connected and up to date.",
    image: "/images/learnx-bg2.jpg",
    imageAlt:
      "Secondary school students walking together between lessons",
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
    kicker: "Courses · Live classes · Assessment · Progress",
    heading: "Teaching and learning, brought online",
    description:
      "Courses, assignments and live classes in one experience — LearnX LMS gives teachers and students a modern place to work together.",
    image: "/images/learnx-bg.jpg",
    imageAlt:
      "A classroom set up and ready for a lesson to begin",
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

type ProductKey = (typeof products)[number]["key"];

/** Small downward triangle that opens every section eyebrow. */
function EyebrowMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 10 8"
      className="w-2.5 h-2 fill-current"
      focusable="false"
    >
      <path d="M0 0h10L5 8z" />
    </svg>
  );
}

const panelVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function ProductSwitcher() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<ProductKey>("sms");
  const current = products.find((p) => p.key === active)!;
  const tabRefs = useRef<Partial<Record<ProductKey, HTMLButtonElement | null>>>({});

  // Roving focus, as a tablist is expected to behave.
  const onTabKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const i = products.findIndex((p) => p.key === active);
    const step = e.key === "ArrowRight" ? 1 : -1;
    const next = products[(i + step + products.length) % products.length];
    setActive(next.key);
    tabRefs.current[next.key]?.focus();
  };

  return (
    <section id="platform" className="relative bg-navy-900 overflow-hidden">
      <div className="container-custom pt-20 lg:pt-28 pb-12 lg:pb-16 text-center">
        <motion.div
          data-reveal
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-teal-400 mb-6">
            <EyebrowMark />
            One platform, two systems
          </span>
          <h2 className="display-tight text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-white leading-[1.03] text-balance max-w-4xl mx-auto">
            Everything a school needs to run and teach.
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl mx-auto text-pretty">
            Administration and classrooms share one database, one login and one
            source of truth.
          </p>
        </motion.div>
      </div>

      {/* Full-bleed band: photography running off the left edge, the system you
          picked written out on the right. */}
      <div className="lg:grid lg:grid-cols-2 lg:items-center">
        <div className="relative w-full aspect-[3/2]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              data-reveal
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={current.image}
                alt={current.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </motion.div>
          </AnimatePresence>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,0.55)_0%,transparent_35%,transparent_75%,rgba(11,31,58,0.85)_100%)]"
          />
        </div>

        <div className="px-5 sm:px-8 lg:pl-14 lg:pr-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))] py-12 lg:py-20 flex flex-col justify-center">
          <div
            role="tablist"
            aria-label="LearnX systems"
            className="flex items-center gap-8 border-b border-white/15"
          >
            {products.map((p) => {
              const isActive = active === p.key;
              return (
                <button
                  key={p.key}
                  ref={(el) => {
                    tabRefs.current[p.key] = el;
                  }}
                  role="tab"
                  id={`system-tab-${p.key}`}
                  aria-selected={isActive}
                  aria-controls={`system-panel-${p.key}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(p.key)}
                  onKeyDown={onTabKeyDown}
                  className={`relative pb-4 text-[15px] font-semibold tracking-tight transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {p.tab}
                  {isActive && (
                    <motion.span
                      layoutId="platform-tab-underline"
                      aria-hidden
                      className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-teal-400"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              id={`system-panel-${current.key}`}
              role="tabpanel"
              aria-labelledby={`system-tab-${current.key}`}
              variants={panelVariants}
              data-reveal
              initial={reduceMotion ? false : "hidden"}
              animate="show"
              exit="exit"
              className="pt-10"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-teal-400 mb-5">
                {current.kicker}
              </p>
              <h3 className="display-tight text-[1.9rem] sm:text-[2.4rem] font-bold text-white leading-[1.08] text-balance">
                {current.heading}
              </h3>
              <p className="mt-5 text-[15px] sm:text-base text-slate-400 leading-relaxed max-w-lg text-pretty">
                {current.description}
              </p>

              <div className="mt-9 grid sm:grid-cols-2 gap-x-8 border-t border-white/10">
                {current.features.map(({ icon: Icon, title, description }, i) => (
                  <motion.div
                    key={title}
                    data-reveal
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 * i,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-3 py-4 border-b border-white/10"
                  >
                    <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-white/[0.07] ring-1 ring-white/10 flex items-center justify-center">
                      <Icon size={15} className="text-teal-400" />
                    </span>
                    <span>
                      <span className="block text-[13.5px] font-semibold text-white tracking-tight">
                        {title}
                      </span>
                      <span className="block text-[12.5px] text-slate-400 mt-0.5 leading-relaxed">
                        {description}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#pricing"
                className="group mt-9 self-start inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold tracking-tight text-navy-900 bg-white rounded-full transition-all duration-300 hover:bg-slate-100 motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                See pricing
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
