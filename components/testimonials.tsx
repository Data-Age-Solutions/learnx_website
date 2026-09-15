"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "LearnX SMS transformed how we operate. The AI timetabling alone saved our academic coordinator three full days every term.",
    name: "Patricia Ndlovu",
    title: "Principal",
    school: "Westgate Academy, Harare",
    initials: "PN",
    color: "bg-teal-500",
  },
  {
    quote:
      "Our teachers moved coursework and assignments onto LearnX LMS in a week. Grading turnaround is now same-day instead of same-week.",
    name: "James Okafor",
    title: "IT Manager",
    school: "Lagos International School",
    initials: "JO",
    color: "bg-[#7C3AED]",
  },
  {
    quote:
      "Finance, HR, academics and now our virtual classrooms — all in one place. Our admin team finally has time to focus on the students.",
    name: "Dr. Clara Moyo",
    title: "School Administrator",
    school: "Sunshine High School, Lusaka",
    initials: "CM",
    color: "bg-slate-700",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50/60 border-t border-slate-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Trusted by school leaders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array(5).fill(0).map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M10 1l2.39 4.84L18 6.91l-4 3.9.94 5.5L10 13.77l-4.94 2.54.94-5.5-4-3.9 5.61-.07z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.title} · {t.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
