import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { jobs } from "@/lib/jobs";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = jobs.find(j => j.slug === params.slug);
  return { title: job ? `${job.title} — Adroit` : "Job — Adroit" };
}

export default function JobDetail({ params }: Props) {
  const job = jobs.find(j => j.slug === params.slug);
  if (!job) return notFound();

  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    employmentType: job.type,
    jobLocationType: job.remote ? "TELECOMMUTE" : "ONSITE",
    hiringOrganization: {
      "@type": "Organization",
      name: "Adroit Tech Solutions",
      sameAs: "https://adroittechsolutions.com",
      logo: "https://adroittechsolutions.com/logo.png"
    },
    ...(job.min && job.max && job.currency && job.unitText ? {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: job.currency,
        value: { "@type": "QuantitativeValue", minValue: job.min, maxValue: job.max, unitText: job.unitText }
      }
    } : {})
  };

  return (
    <section className="bg-white min-h-screen pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold">{job.title}</h1>
        <p className="mt-2 text-neutral-600">
          {job.location} • {job.type.replaceAll("_"," ").toLowerCase().replace(/\b\w/g,c=>c.toUpperCase())}
          {job.remote ? " • Remote OK" : ""}
        </p>
        <p className="mt-6 leading-relaxed text-neutral-800">{job.description}</p>

        <div className="mt-8">
          <Link href={`/apply?role=${encodeURIComponent(job.slug)}`}
            className="rounded-full bg-[#0b2a35] text-white px-6 py-3 font-semibold hover:bg-[#0e3644]">
            Apply now
          </Link>
        </div>

        <div className="mt-12 text-sm text-neutral-500">
          Adroit Tech Solutions is an Equal Opportunity Employer. If you need an accommodation,
          email careers@adroittechsolutions.com.
        </div>
      </div>
    </section>
  );
}
