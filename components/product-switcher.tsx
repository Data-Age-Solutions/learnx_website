"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
  Building2,
  GraduationCap,
} from "lucide-react";

const products = [
  {
    key: "sms",
    index: "01",
    tab: "School Management",
    tagline: "Admissions, finance, staff and reporting",
    tabIcon: Building2,
    eyebrow: "School Management System",
    heading: "Run the whole school from one place",
    description:
      "Admissions, attendance, finance and staff — LearnX SMS keeps every administrative thread of your school connected and up to date.",
    // Office photography for the administrative system, classroom photography
    // for the teaching one — previously these were the wrong way round.
    image: "/images/bg2.jpg",
    imageAlt:
      "Two school administrators working side by side on laptops in a school office",
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
    index: "02",
    tab: "Learning Management",
    tagline: "Courses, live classes, assessment and progress",
    tabIcon: GraduationCap,
    eyebrow: "Learning Management System",
    heading: "Teaching and learning, brought online",
    description:
      "Courses, assignments and live classes in one experience — LearnX LMS gives teachers and students a modern place to work together.",
    image: "/images/bg1.jpg",
    imageAlt:
      "Students working on laptops at their desks during a lesson in a bright classroom",
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

const panelVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function ProductSwitcher() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<ProductKey>("sms");
  const current = products.find((p) => p.key === active)!;
  const tabRefs = useRef<Partial<Record<ProductKey, HTMLButtonElement | null>>>({});

  // Roving focus, as a tablist is expected to behave — without it the two
  // cards are reachable but not navigable the way a real tab set is.
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
    <section
      id="platform"
      className="relative section-padding bg-[#FAFAFC] overflow-hidden"
    >
      {/* Light counterpart of the hero's ground: a grid for structure and a teal
          wash under the heading, so the two sections read as one system. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.07),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative z-10 container-custom">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white ring-1 ring-slate-200/80 shadow-soft text-[12px] font-semibold uppercase tracking-widest text-teal-700 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            One platform, two systems
          </span>
          <h2 className="display-tight text-[2rem] sm:text-4xl md:text-[3rem] font-bold text-slate-900 leading-[1.08] text-balance max-w-3xl mx-auto">
            Everything a school needs to{" "}
            <span className="text-gradient-teal">run and teach</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto text-pretty">
            Administration and classrooms share one database, one login and one
            source of truth. Choose a side to see what it does.
          </p>
        </motion.div>

        {/* System selector. Two substantial cards rather than a small pill pair —
            the control itself should say "two systems" before the copy does. */}
        <div
          role="tablist"
          aria-label="LearnX systems"
          className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          {products.map((p) => {
            const TabIcon = p.tabIcon;
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
                className={`group relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
                  isActive
                    ? "bg-navy-900 shadow-elevated"
                    : "bg-white ring-1 ring-slate-200/80 shadow-soft hover:ring-slate-300 motion-safe:hover:-translate-y-0.5"
                }`}
              >
                {/* Gradient hairline along the top edge of the selected card —
                    the same teal-to-violet pair the hero uses for emphasis. */}
                {isActive && (
                  <motion.span
                    layoutId="system-rim"
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE] to-[#A78BFA]/70"
                  />
                )}
                <div className="flex items-start gap-3.5">
                  <span
                    className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "bg-white/10 ring-1 ring-white/20 text-teal-300"
                        : "bg-gradient-to-br from-teal-50 to-white ring-1 ring-teal-100 text-teal-700"
                    }`}
                  >
                    <TabIcon size={19} />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block text-[15px] font-semibold tracking-tight ${
                        isActive ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {p.tab}
                    </span>
                    <span
                      className={`block text-[13px] leading-snug mt-0.5 ${
                        isActive ? "text-slate-300/90" : "text-slate-500"
                      }`}
                    >
                      {p.tagline}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`ml-auto text-[11px] font-bold tabular-nums tracking-widest ${
                      isActive ? "text-teal-300/80" : "text-slate-300"
                    }`}
                  >
                    {p.index}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* One slab per system: copy and capabilities on the page's paper, the
            photograph bleeding to the card's own edge. No fake browser chrome —
            these are photographs of schools, not screenshots of the product. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            id={`system-panel-${current.key}`}
            role="tabpanel"
            aria-labelledby={`system-tab-${current.key}`}
            variants={panelVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            exit="exit"
            className="relative rounded-[26px] bg-white ring-1 ring-slate-200/70 shadow-elevated overflow-hidden"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/70 to-transparent"
            />

            <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
              <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-full lg:order-2">
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
                {/* Scrim: keeps the label legible and stops a bright photo from
                    out-shouting the copy beside it. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(200deg,rgba(11,31,58,0)_35%,rgba(11,31,58,0.55)_100%)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/[0.06]"
                />
                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel-dark ring-1 ring-white/15 text-[11px] font-semibold uppercase tracking-widest text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  LearnX {current.key.toUpperCase()}
                </span>
              </div>

              <div className="p-7 sm:p-10 lg:p-12 lg:order-1">
                <p className="text-[12px] font-semibold uppercase tracking-widest text-teal-600 mb-3">
                  {current.eyebrow}
                </p>
                <h3 className="display-tight text-2xl sm:text-[1.9rem] font-bold text-slate-900 leading-[1.15] mb-4 text-balance">
                  {current.heading}
                </h3>
                <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed max-w-xl">
                  {current.description}
                </p>

                {/* Capabilities as hairline-separated rows. Six ringed boxes
                    read as clutter at this size; rules on shared paper read as
                    one specification sheet. */}
                <div className="mt-8 grid sm:grid-cols-2 gap-x-8 border-t border-slate-200/70">
                  {current.features.map(({ icon: Icon, title, description }, i) => (
                    <motion.div
                      key={title}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.05 * i,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-start gap-3 py-4 border-b border-slate-200/70"
                    >
                      <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-gradient-to-br from-teal-50 to-white ring-1 ring-teal-100 flex items-center justify-center transition-colors duration-300 group-hover:ring-teal-200">
                        <Icon size={15} className="text-teal-700" />
                      </span>
                      <span>
                        <span className="block text-[13.5px] font-semibold text-slate-900 tracking-tight">
                          {title}
                        </span>
                        <span className="block text-[12.5px] text-slate-500 mt-0.5 leading-relaxed">
                          {description}
                        </span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
