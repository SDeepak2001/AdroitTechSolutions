import Link from "next/link";
import { jobs } from "@/lib/jobs";

export default function JobsPage() {
  return (
    <section className="bg-white min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold tracking-tight">Open Roles</h1>
        <p className="mt-2 text-neutral-600">
          We post new roles weekly. Don’t see a match?{" "}
          <Link href="/#contact" className="underline">Send your resume</Link>.
        </p>

        <div className="mt-8 grid gap-4">
          {jobs.map((j) => (
            <Link key={j.slug} href={`/jobs/${j.slug}`}
              className="rounded-2xl border border-neutral-200 p-5 hover:shadow-md transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg">{j.title}</h3>
                  <div className="mt-1 text-sm text-neutral-600">
                    {j.location} • {j.type.replaceAll("_"," ").toLowerCase().replace(/\b\w/g,c=>c.toUpperCase())}
                    {j.remote ? " • Remote OK" : ""}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    {j.skills.map(s => (
                      <span key={s} className="rounded-lg border border-neutral-200 bg-neutral-50 px-2 py-1">{s}</span>
                    ))}
                  </div>
                </div>
                {j.min && j.max && (
                  <div className="text-sm font-semibold">
                    ${j.min}–${j.max}/{j.unitText?.toLowerCase()}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
