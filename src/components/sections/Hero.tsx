"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b2a35] text-white pt-24">
      {/* subtle gradients + right-side abstract circles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_0%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.25))]" />
      </div>
      <div aria-hidden className="absolute right-[-12rem] top-[-8rem] w-[42rem] h-[42rem] rounded-full"
           style={{ background: "radial-gradient(closest-side, #19B5FE 0%, rgba(25,181,254,0.08) 65%, transparent 70%)", filter: "blur(6px)" }} />
      <div aria-hidden className="absolute right-[-18rem] top-[16rem] w-[48rem] h-[48rem] rounded-full"
           style={{ background: "radial-gradient(closest-side, #00E5A8 0%, rgba(0,229,168,0.10) 65%, transparent 70%)", filter: "blur(10px)" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl text-[44px] sm:text-[56px] md:text-[66px] leading-[1.05] font-extrabold tracking-tight"
        >
          One Partner.
          <br className="hidden sm:block" />
          Infinite Possibilities.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          className="mt-6 max-w-2xl text-lg text-teal-100/90"
        >
          We help companies move from idea to impact: secure, scalable platforms on AWS —
          microservices, data pipelines, and modern frontends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Link href="#contact" className="rounded-full bg-[#FFD54A] text-[#0b2a35] px-6 py-3 font-bold shadow-sm hover:brightness-95">
            Start a project
          </Link>
          <Link href="#services" className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/5">
            Explore services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
