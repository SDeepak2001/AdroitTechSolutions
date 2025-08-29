"use client";

import {
  CheckCircle2,
  Compass,
  Rocket,
  Handshake,
  Shield,
  Clock,
  Target,
} from "lucide-react";

export default function About() {
  const engagementModels = [
    "Advisory sprints",
    "Project delivery",
    "Managed pods",
    "Staff augmentation",
    "Retainers",
    "Training & enablement",
  ];

  const differentiators = [
    "Senior engineers, hands-on leadership",
    "Transparent pricing & weekly demos",
    "Security-by-default, privacy by design",
    "Cloud-native patterns & observability",
    "Outcome-driven roadmaps, not time sinks",
    "Measurable value within weeks—not months",
  ];

  const outcomes = [
    { k: "2–6 weeks", v: "Typical pilot to production" },
    { k: "99.9%+", v: "Platform uptime on launch" },
    { k: "NPS 70+", v: "Client satisfaction" },
    { k: "12+", v: "Cloud migrations completed" },
  ];

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              About Adroit
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              We’re a modern consulting & engineering partner based in{" "}
              <span className="font-medium">Vancouver, WA</span>, helping
              startups and enterprises move from idea to impact. We combine deep
              technical ownership with business-first thinking to deliver{" "}
              <span className="font-semibold">
                secure, scalable, and future-ready platforms
              </span>
              .
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Remote-first, delivery-driven, and transparent. You’ll see
              progress weekly via demos, metrics, and clear decision records.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Global reach, local presence — delivering impact from Vancouver to worldwide clients.",
                "AI-assisted delivery — we use AI where it speeds outcomes without compromising quality or security.",
                "Cloud-native by design — Kubernetes, serverless, containers, and full-stack observability.",
                "Security & compliance built-in — IAM, least privilege, auditability, and SOC2 readiness.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span className="text-neutral-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How we work */}
          <div className="md:col-span-6">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900">How we work</h3>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-neutral-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <Compass className="h-5 w-5 text-neutral-800" />
                    <div className="font-semibold text-neutral-900">
                      Discover
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-700">
                    Clarify goals, constraints, and success metrics. Architecture
                    options & cost model.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-neutral-800" />
                    <div className="font-semibold text-neutral-900">Pilot</div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-700">
                    Ship a thin slice to production. Instrument. Validate value
                    and risks quickly.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-neutral-800" />
                    <div className="font-semibold text-neutral-900">Scale</div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-700">
                    Harden, automate, and expand. CI/CD, SLOs, security, and
                    handover.
                  </p>
                </div>
              </div>

              {/* Engagement models */}
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <Handshake className="h-5 w-5 text-neutral-800" />
                  <h4 className="font-semibold text-neutral-900">
                    Engagement models
                  </h4>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  {engagementModels.map((m) => (
                    <span
                      key={m}
                      className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-neutral-800"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Differentiators */}
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-neutral-800" />
                  <h4 className="font-semibold text-neutral-900">
                    What makes us different
                  </h4>
                </div>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {differentiators.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-neutral-800">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Outcomes ribbon (proof points) */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.k + o.v}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-6 text-center shadow-sm"
            >
              <div className="text-2xl font-extrabold text-neutral-900">
                {o.k}
              </div>
              <div className="mt-1 text-sm text-neutral-600">{o.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
