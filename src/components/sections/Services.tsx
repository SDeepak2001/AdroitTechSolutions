import { Layers, Cloud, ShieldCheck, Rocket } from "lucide-react";

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#19B5FE]/20 to-[#00E5A8]/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{desc}</p>
    </div>
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
          <Card icon={<Layers className="h-5 w-5" />} title="Backend & APIs" desc="Microservices, REST/GraphQL, async messaging, and data stores tuned for scale." />
          <Card icon={<Cloud className="h-5 w-5" />} title="Cloud & DevOps" desc="IaC with Terraform, CI/CD, observability; AWS ECS/EKS/Lambda, S3, DynamoDB, RDS." />
          <Card icon={<ShieldCheck className="h-5 w-5" />} title="Security" desc="IAM, VPC, least-privilege, encryption, audit logging, and privacy by design." />
          <Card icon={<Rocket className="h-5 w-5" />} title="Web UI" desc="Fast, elegant interfaces with React + Tailwind. Accessibility and performance baked in." />
        </div>
      </div>
    </section>
  );
}
