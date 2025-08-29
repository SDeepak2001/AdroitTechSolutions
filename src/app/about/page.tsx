export const metadata = {
  title: "About Us | Adroit Tech Solutions",
  description:
    "Adroit Tech Solutions — consulting, cloud, data & AI that turn complexity into opportunity.",
};

const capabilities = [
  "Cloud Platforms (AWS, Azure, GCP)",
  "Data Engineering & Lakehouse",
  "AI/ML & GenAI (RAG, MLOps)",
  "Event-Driven Architectures",
  "API Platforms & Integration",
  "Security & Compliance by Design",
  "DevOps, IaC & SRE",
  "Modern Web & Mobile Apps",
];

export default function AboutPage() {
  return (
    <>
      {/* White hero with subtle border to separate from navbar */}
      <header className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-black">About Adroit</h1>
          <p className="mt-4 max-w-3xl text-neutral-700 leading-relaxed">
            We’re a partner, not a body shop. Adroit helps teams ship reliable software with
            measurable outcomes — from roadmaps and pilots to secure production systems. Our
            squads bring senior engineering, product thinking, and a pragmatic, outcome-first
            approach across cloud, data, and AI.
          </p>
        </div>
      </header>

      {/* Three “how we work” cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="font-semibold text-neutral-900">What we value</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Clarity over complexity. Fast feedback. Clean execution. We pursue visible progress
              each week and crisp handoffs that last.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="font-semibold text-neutral-900">How we deliver</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Discovery → pilot → milestones with demos → outcomes. Transparent, traceable,
              and predictable delivery with observability built-in.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="font-semibold text-neutral-900">Where we help</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Platform modernization, trusted data foundations, AI enablement, and secure digital
              experiences that scale with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-neutral-900">Core capabilities</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {capabilities.map((c) => (
                <div
                  key={c}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
