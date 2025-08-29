import Link from "next/link";

export const metadata = {
  title: "Careers | Adroit Tech Solutions",
  description:
    "Join a delivery-driven team building secure, scalable, and elegant systems.",
};

export default function CareersPage() {
  return (
    <>
      <header className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-black">Careers</h1>
          <p className="mt-4 max-w-3xl text-neutral-700">
            We’re a remote-friendly, delivery-driven studio. If you’re looking for impact,
            ownership, and a supportive team, we’d love to hear from you.
          </p>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-neutral-800">
              No public openings right now — but we read every message. Use the button below
              to reach out, and we’ll get back within one business day.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded-full bg-[#0b2a35] text-white px-6 py-3 font-semibold hover:bg-[#0e3644]"
            >
              Contact us about roles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
