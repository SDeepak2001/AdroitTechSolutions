import Link from "next/link";

export default function CalloutBand() {
  return (
    <section className="bg-[#0b2a35]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="text-white text-2xl font-extrabold tracking-tight">
          Ready to move faster?
        </h3>
        <div className="flex gap-3">
          <Link href="#contact" className="rounded-full bg-[#FFD54A] text-[#0b2a35] px-6 py-3 font-bold hover:brightness-95">
            Start a project
          </Link>
          <Link href="#work" className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/5">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
