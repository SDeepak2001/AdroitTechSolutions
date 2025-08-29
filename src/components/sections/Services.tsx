"use client";

import Link from "next/link";
import {
  Brain,
  LineChart,
  Cloud,
  Layers,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

type Service = {
  slug: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  glowFrom: string;
  glowTo: string;
};

const services: Service[] = [
  {
    slug: "consulting",
    title: "IT Consulting & Strategy",
    desc:
      "Roadmaps, architecture reviews, cost optimization, and program delivery. We align technology with business outcomes.",
    icon: <LineChart className="h-6 w-6" />,
    glowFrom: "from-sky-400/30",
    glowTo: "to-cyan-300/30",
  },
  {
    slug: "ai",
    title: "AI & Machine Learning",
    desc:
      "GenAI apps, model selection, MLOps, and data pipelines. From prompt engineering to production-grade inference.",
    icon: <Brain className="h-6 w-6" />,
    glowFrom: "from-fuchsia-400/30",
    glowTo: "to-pink-300/30",
  },
  {
    slug: "cloud",
    title: "Cloud & DevOps",
    desc:
      "IaC with Terraform, CI/CD, container orchestration, observability, and SRE practices across AWS and beyond.",
    icon: <Cloud className="h-6 w-6" />,
    glowFrom: "from-emerald-400/30",
    glowTo: "to-teal-300/30",
  },
  {
    slug: "backend",
    title: "Backend & APIs",
    desc:
      "Microservices, REST/GraphQL, event-driven systems, and scalable datastores tuned for reliability and speed.",
    icon: <Layers className="h-6 w-6" />,
    glowFrom: "from-cyan-400/30",
    glowTo: "to-sky-300/30",
  },
  {
    slug: "security",
    title: "Security & Compliance",
    desc:
      "Least-privilege IAM, network isolation, encryption, audit logging, and readiness for SOC2/ISO27001.",
    icon: <ShieldCheck className="h-15 w-6" />,
    glowFrom: "from-rose-400/30",
    glowTo: "to-orange-300/30",
  },
  {
    slug: "apps",
    title: "Web & Mobile Apps",
    desc:
      "Modern, accessible interfaces with React/Next.js and performant APIs — designed for usability and scale.",
    icon: <Smartphone className="h-15 w-6" />,
    glowFrom: "from-amber-400/30",
    glowTo: "to-yellow-300/30",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0b2a35] text-white py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold tracking-tight">Our Services</h2>
        <p className="mt-3 text-center text-teal-100/90 max-w-3xl mx-auto">
          Consulting with clarity. Services with impact. From AI and cloud to infrastructure and
          security, we guide you end-to-end in your IT journey.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="block group">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ translateY: -6 }}
                className="relative rounded-2xl border border-white/10 bg-[#0f2630]/80 backdrop-blur-sm p-6 shadow-[0_8px_28px_rgba(0,0,0,0.25)]"
              >
                {/* Icon + spotlight glow */}
                <div className="relative mb-4">
                  <div
                    className={`pointer-events-none absolute -inset-2 rounded-xl blur-xl opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:-inset-3 bg-gradient-to-br ${s.glowFrom} ${s.glowTo}`}
                  />
                  <div className="relative inline-grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-[#0b2230] text-white">
                    {s.icon}
                  </div>
                </div>

                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-teal-100/85 leading-relaxed">{s.desc}</p>
                <div className="mt-5 h-[3px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-2/5" />
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
