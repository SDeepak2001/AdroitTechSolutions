function CaseCard({ title, metric, desc }: { title: string; metric: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-neutral-900">{title}</h3>
        <span className="text-xs rounded-lg bg-neutral-100 px-2 py-1 text-neutral-700">{metric}</span>
      </div>
      <p className="mt-3 text-neutral-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Work() {
  const cases = [
    { title: "Payments Platform", metric: "10% faster queries", desc: "DynamoDB/Postgres tuning; CloudWatch dashboards for SLOs." },
    { title: "Infra Automation", metric: "Minutes → Seconds", desc: "Reusable Terraform modules + GitHub Actions across environments." },
    { title: "Secure APIs", metric: "99.9% uptime", desc: "OAuth2 + API Gateway, least-privilege IAM, blue-green releases." },
  ];
  return (
    <section id="work" className="bg-neutral-50 border-y border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Selected work</h2>
        <p className="mt-2 text-neutral-600 max-w-2xl">Replace these with your real case studies and outcomes.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => <CaseCard key={i} {...c} />)}
        </div>
      </div>
    </section>
  );
}
