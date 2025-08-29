// src/app/careers/page.tsx
import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top banner */}
      <section className="relative overflow-hidden bg-[#ef4444] text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(80rem 40rem at 100% -10%, rgba(255,255,255,0.25), transparent)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">
            Careers
          </h1>
        </div>
      </section>

      {/* Body copy */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-14 space-y-6 text-neutral-700 leading-relaxed">
          <p>
            Do you want a career that meets you where you are and helps you get
            where you want to go? At <strong>Adroit Tech Solutions</strong>, we
            believe that with the right opportunity every individual can chart
            their path, grow their skills, and do meaningful work.
          </p>
          <p>
            Our teams build secure, scalable platforms for startups and
            enterprises—blending craftsmanship, ownership, and measurable
            outcomes. If you’re excited by cloud, data, and product engineering,
            you’ll fit right in.
          </p>
          <p>
            We’re a remote-friendly, delivery-driven studio. If you’re looking
            for impact, autonomy, and a supportive team, we’d love to hear from
            you.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-[#0b2a35] text-white px-6 py-3 font-semibold hover:bg-[#0e3644]"
            >
              Contact us about roles
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center rounded-full border border-neutral-300 text-neutral-800 px-6 py-3 font-semibold hover:bg-neutral-50"
            >
              Read our blog
            </Link>
          </div>

          <p className="mt-3 text-sm text-neutral-500">
            No listings posted here yet—use the button above to reach out.
          </p>
        </div>
      </section>
    </main>
  );
}
