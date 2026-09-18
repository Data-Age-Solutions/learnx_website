"use client";

import { motion } from "framer-motion";

const integrations = [
  "QuickBooks",
  "Pastel",
  "Google Workspace",
  "Microsoft 365",
  "Twilio SMS",
  "Mailchimp",
  "Stripe",
  "Zoom",
];

export default function Integrations() {
  return (
    <section id="integrations" className="section-padding bg-slate-50/60 border-t border-slate-100">
      <div className="container-custom">
        <motion.div
          data-reveal
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
            Integrations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Works with your existing tools
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-lg mx-auto">
            Connect LearnX with the software your school already uses — no complex setup required.
          </p>
        </motion.div>
      </div>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max marquee-track">
          {[...integrations, ...integrations].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="mx-4 flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-slate-200 whitespace-nowrap"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="text-sm font-bold text-slate-500">{name[0]}</span>
              </div>
              <span className="text-sm font-semibold text-slate-700">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
