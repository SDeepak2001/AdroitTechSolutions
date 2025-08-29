export default function About() {
  const chips = [
    "Java / Python / Node",
    "React / Next.js",
    "AWS ECS / EKS / Lambda",
    "Postgres / DynamoDB",
    "Terraform / CI/CD",
    "OAuth2 / API Gateway",
  ];
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">About Adroit</h2>
          <p className="mt-4 text-neutral-600">
            We’re a lean engineering studio delivering production-ready platforms for startups and enterprises.
            Small squads, deep technical ownership, and a relentless focus on reliability and speed.
          </p>
          <ul className="mt-6 space-y-2 text-neutral-700 list-disc list-inside">
            <li>Based in Portland, serving clients remotely.</li>
            <li>Cloud-native from day one: Terraform, containers, observability.</li>
            <li>Transparent delivery with weekly demos and metrics.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
          <h3 className="font-semibold text-neutral-900">Core capabilities</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-neutral-700">
            {chips.map((t) => (
              <span key={t} className="rounded-lg border border-neutral-200 bg-white px-3 py-2">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
