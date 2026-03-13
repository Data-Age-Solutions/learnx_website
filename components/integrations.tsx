"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "QuickBooks", category: "Finance" },
  { name: "Pastel", category: "Accounting" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "Microsoft 365", category: "Productivity" },
  { name: "Twilio SMS", category: "Messaging" },
  { name: "Mailchimp", category: "Email" },
  { name: "Stripe", category: "Payments" },
  { name: "Zoom", category: "Video" },
];

export default function Integrations() {
  return (
    <section id="integrations" className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-500 mb-3">
            Integrations
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Works with your existing tools
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-lg mx-auto">
            Connect LearnX with the software your school already uses — no complex setup required.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                <span className="text-base font-bold text-slate-600">{item.name[0]}</span>
              </div>
              <p className="text-sm font-semibold text-slate-800">{item.name}</p>
              <p className="text-xs text-slate-400 mt-0.5">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
