// src/components/sections/Services.tsx
"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Layers, Cloud, ShieldCheck, Rocket } from "lucide-react";
import { useCallback } from "react";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  brief: string;
  details: string;
};

function InteractiveCard({ icon, title, brief, details }: CardProps) {
  // subtle 3D tilt on hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px / 4);
    y.set(py / 4);
  }, [x, y]);

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY }}
      className="group relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm will-change-transform
                 hover:shadow-xl transition-shadow"
    >
      {/* Glow border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent
                      group-hover:ring-[#00E5A8]/30 group-hover:shadow-[0_0_0_6px_rgba(0,229,168,0.08)] transition" />

      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#19B5FE]/20 to-[#00E5A8]/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{brief}</p>

      {/* Reveal panel on hover */}
      <div className="mt-4">
        <div className="h-[1px] w-10 bg-gradient-to-r from-[#19B5FE] to-[#00E5A8] rounded-full" />
      </div>
      <div className="mt-3 text-sm text-neutral-700 opacity-0 max-h-0 overflow-hidden
                      group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300">
        {details}
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">Services</h2>
        <p className="mt-2 text-neutral-600 max-w-2xl">
          From strategy to production: architecture, implementation, automation, and SLOs.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InteractiveCard
            icon={<Layers className="h-5 w-5" />}
            title="Backend & APIs"
            brief="Microservices, REST/GraphQL, async messaging, and data stores tuned for scale."
            details="We design domain-driven services with observability, retries, idempotency, and safe deployments (blue/green, canary)."
          />
          <InteractiveCard
            icon={<Cloud className="h-5 w-5" />}
            title="Cloud & DevOps"
            brief="IaC with Terraform, CI/CD, and end-to-end observability on AWS."
            details="ECS/EKS/Lambda, S3, DynamoDB, RDS, CloudFront. Pipelines on GitHub Actions with drift detection and cost visibility."
          />
          <InteractiveCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Security"
            brief="Least-privilege IAM, VPC isolation, encryption, audit logging."
            details="Threat modeling, secret management, posture hardening, and privacy by design with routine security reviews."
          />
          <InteractiveCard
            icon={<Rocket className="h-5 w-5" />}
            title="Web UI"
            brief="Fast, elegant interfaces with React + Tailwind."
            details="Design systems, accessibility, performance budgets, SSR/ISR, and analytics-instrumented product surfaces."
          />
        </div>
      </div>
    </section>
  );
}
