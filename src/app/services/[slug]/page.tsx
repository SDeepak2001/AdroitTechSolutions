import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

/** Per-slug content */
const SERVICE_CONTENT: Record<
  string,
  { title: string; intro: string; bullets: string[]; cta?: string }
> = {
  consulting: {
    title: "IT Consulting & Strategy",
    intro:
      "We partner with leadership to align technology with business outcomes. Our consulting focuses on clarity, measurable impact, and pragmatic delivery.",
    bullets: [
      "Technology roadmaps & portfolio rationalization",
      "Architecture reviews & modernization plans",
      "Cloud cost optimization & FinOps reviews",
      "Program delivery models and PMO acceleration",
      "Build-vs-buy guidance, vendor selection",
    ],
    cta: "Talk to a consultant",
  },
  ai: {
    title: "AI & Machine Learning",
    intro:
      "From GenAI prototypes to production ML pipelines, we design, evaluate, and ship AI systems you can trust.",
    bullets: [
      "GenAI apps, RAG, prompt engineering",
      "Model selection & evaluation frameworks",
      "MLOps: data pipelines, monitoring, governance",
      "Latency, reliability and cost engineering",
      "Responsible AI & privacy-by-design",
    ],
    cta: "Explore AI with us",
  },
  cloud: {
    title: "Cloud & DevOps",
    intro:
      "Cloud-native platforms with infrastructure-as-code, CI/CD, and end-to-end observability to move faster with confidence.",
    bullets: [
      "Terraform modules & environment baselines",
      "CI/CD pipelines, preview environments",
      "Kubernetes/ECS, serverless architectures",
      "SRE practices, SLOs and error budgets",
      "Cost controls and autoscaling strategies",
    ],
    cta: "Modernize your platform",
  },
  backend: {
    title: "Backend & APIs",
    intro:
      "We design resilient microservices and APIs that scale, with observability and predictable performance baked in.",
    bullets: [
      "REST/GraphQL APIs and event-driven systems",
      "Postgres/DynamoDB design and tuning",
      "Async messaging with queues/streams",
      "Caching, rate-limits, multi-tenancy",
      "Blue/green deployments & canary releases",
    ],
    cta: "Design your next service",
  },
  security: {
    title: "Security & Compliance",
    intro:
      "Security isn’t a checkbox — it’s a culture. We help teams adopt zero-trust patterns and meet compliance with minimum friction.",
    bullets: [
      "Least-privilege IAM & network isolation",
      "Key management, encryption, secrets hygiene",
      "Audit logs, threat modeling, incident playbooks",
      "SOC2/ISO27001 readiness & gap analysis",
      "Privacy: data minimization & retention",
    ],
    cta: "Raise your security bar",
  },
  apps: {
    title: "Web & Mobile Apps",
    intro:
      "Delightful interfaces that are fast, accessible, and maintainable — powered by modern frameworks and APIs.",
    bullets: [
      "React/Next.js applications, design systems",
      "Performance budgets, Core Web Vitals",
      "Accessibility (WCAG) baked in",
      "API integration & edge rendering",
      "UX research and rapid prototyping",
    ],
    cta: "Start your build",
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICE_CONTENT).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const data = SERVICE_CONTENT[params.slug];
  if (!data) return notFound();

  return (
    <>
      <Navbar />

      <main className="bg-white text-neutral-900 pt-16">
        <section className="relative bg-[#0b2a35] text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-teal-100/85 hover:text-white"
            >
              <ArrowLeft size={18} /> Back to services
            </Link>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
              {data.title}
            </h1>
            <p className="mt-4 max-w-3xl text-teal-100/90">{data.intro}</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.bullets.map((b, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-teal-100/90"
                >
                  • {b}
                </div>
              ))}
            </div>

            {/* ✅ CTAs now navigate to your home contact section */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex rounded-full bg-[#FFD54A] text-[#0b2a35] px-6 py-3 font-bold shadow-sm hover:brightness-95"
              >
                {data.cta ?? "Contact us"}
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold">How we work</h2>
          <p className="mt-3 text-neutral-600 max-w-3xl">
            We keep delivery pragmatic and transparent: discovery and alignment, small pilot to
            de-risk assumptions, iterative milestones with demos, and measurable outcomes. You’ll
            get clarity on architecture, costs, and timelines — and we’ll adapt with you as needs evolve.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
