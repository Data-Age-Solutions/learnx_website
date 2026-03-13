"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const nav = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "AI Timetable", href: "#ai" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Help Centre", href: "#" },
      { label: "Status", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-slate-400">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center mb-5">
              <Image
                src="/images/learnx-logo-white.png"
                alt="LearnX"
                width={160}
                height={44}
                className="h-11 w-auto object-contain"
              />
            </a>
            <p className="text-sm leading-relaxed text-slate-500 mb-5">
              The intelligent school management platform for modern education.
            </p>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-slate-400" />
                <span>150 Upper East Road, Mount Pleasant, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="shrink-0 text-slate-400" />
                <a href="tel:+263718773999" className="hover:text-slate-200 transition-colors">+263 71 877 3999</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0 text-slate-400" />
                <a href="mailto:learnx@bytewave.co.zw" className="hover:text-slate-200 transition-colors">learnx@bytewave.co.zw</a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              {["Twitter", "LinkedIn", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-[#122B4D] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1E3A5F] transition-colors text-xs font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {nav.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#122B4D] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} LearnX. All rights reserved.</p>
          <p>
            Designed & built with{" "}
            <span className="text-teal-500">Next.js + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
