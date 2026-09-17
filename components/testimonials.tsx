"use client";

import { motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote:
      "LearnX SMS transformed how we operate. The AI timetabling alone saved our academic coordinator three full days every term.",
    name: "Patricia Ndlovu",
    title: "Principal",
    school: "Westgate Academy, Harare",
    initials: "PN",
  },
  {
    quote:
      "Our teachers moved coursework and assignments onto LearnX LMS in a week. Grading turnaround is now same-day instead of same-week.",
    name: "James Okafor",
    title: "IT Manager",
    school: "Lagos International School",
    initials: "JO",
  },
  {
    quote:
      "Finance, HR, academics and now our virtual classrooms — all in one place. Our admin team finally has time to focus on the students.",
    name: "Dr. Clara Moyo",
    title: "School Administrator",
    school: "Sunshine High School, Lusaka",
    initials: "CM",
  },
];

const [featured, ...supporting] = testimonials;

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

/**
 * Attribution as type rather than a coloured badge. The monogram is kept
 * deliberately quiet — a bright disc beside every name is what makes a
 * testimonial row read as a template.
 */
function Attribution({
  name,
  title,
  school,
  initials,
  size = "sm",
}: {
  name: string;
  title: string;
  school: string;
  initials: string;
  size?: "sm" | "lg";
}) {
  const large = size === "lg";
  return (
    <figcaption className="flex items-center gap-3.5">
      <span
        aria-hidden
        className={`flex-shrink-0 rounded-full bg-slate-900/[0.06] ring-1 ring-slate-900/10 flex items-center justify-center font-bold text-slate-600 ${
          large ? "w-11 h-11 text-[12px]" : "w-9 h-9 text-[10.5px]"
        }`}
      >
        {initials}
      </span>
      <span>
        <span
          className={`block font-semibold text-slate-900 tracking-tight ${
            large ? "text-[15.5px]" : "text-[14px]"
          }`}
        >
          {name}
        </span>
        <span className="block mt-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
          {title} · {school}
        </span>
      </span>
    </figcaption>
  );
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-[#F5F5F3] border-t border-slate-200/70">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Standing column: says whose words these are, and stays put while
              the quotes run alongside it. */}
          <motion.div
            data-reveal
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-teal-600 mb-5">
              <EyebrowMark />
              Testimonials
            </span>
            <h2 className="display-tight text-[2.2rem] sm:text-[2.6rem] lg:text-[3rem] font-bold text-slate-900 leading-[1.05] text-balance">
              Trusted by school leaders.
            </h2>
            <p className="mt-5 text-[15.5px] text-slate-500 leading-relaxed max-w-sm text-pretty">
              Principals, administrators and IT teams on what changed after
              moving to LearnX.
            </p>
          </motion.div>

          <div className="lg:col-span-7 lg:col-start-6">
            {/* The one quote that gets to be loud. */}
            <motion.figure
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="w-9 h-9 fill-teal-500/90 mb-6"
                focusable="false"
              >
                <path d="M9.6 4.8C5.9 6.5 3.4 10 3.4 14.2c0 3.1 1.9 5 4.4 5 2.3 0 4-1.7 4-3.9 0-2.2-1.5-3.8-3.6-3.8-.4 0-.9.1-1 .1.4-1.9 2.2-4.1 4.1-5.2L9.6 4.8Zm9.4 0c-3.7 1.7-6.2 5.2-6.2 9.4 0 3.1 1.9 5 4.4 5 2.3 0 4-1.7 4-3.9 0-2.2-1.5-3.8-3.6-3.8-.4 0-.9.1-1 .1.4-1.9 2.2-4.1 4.1-5.2L19 4.8Z" />
              </svg>

              <blockquote className="display-tight text-[1.4rem] sm:text-[1.7rem] lg:text-[1.95rem] font-medium text-slate-900 leading-[1.3] text-balance">
                {featured.quote}
              </blockquote>

              <div className="mt-7">
                <Attribution {...featured} size="lg" />
              </div>
            </motion.figure>

            {/* The rest, quieter — separated by hairlines rather than boxed. */}
            <div className="mt-12 lg:mt-14 pt-12 lg:pt-14 border-t border-slate-900/10 grid sm:grid-cols-2 gap-10 sm:gap-8">
              {supporting.map((t, i) => (
                <motion.figure
                  data-reveal
                  key={t.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col"
                >
                  <blockquote className="flex-1 text-[15px] text-slate-600 leading-relaxed text-pretty">
                    {t.quote}
                  </blockquote>
                  <div className="mt-6">
                    <Attribution {...t} />
                  </div>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
