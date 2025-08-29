"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = ["/christina.jpg", "/christina1.jpg", "/christopher.jpg"];
const DURATION_MS = 5000;   // slide duration
const FADE_SEC = 1.2;       // crossfade duration (seconds)

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);

  // auto-advance (and set prev for crossfade)
  useEffect(() => {
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(() => {
      setPrev(index);
      setIndex((i) => (i + 1) % images.length);
    }, DURATION_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [index]);

  return (
    <section className="relative overflow-hidden bg-[#0b2a35] text-white pt-24 h-[90vh] flex items-center">
      {/* Crossfade container */}
      <div className="absolute inset-0 z-0">
        {/* Previous slide (fades out) */}
        {prev !== null && (
          <motion.div
            key={`prev-${prev}`}
            className="absolute inset-0 will-change-[opacity]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: FADE_SEC, ease: "easeInOut" }}
          >
            <Image
              src={images[prev]}
              alt="Background previous"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        )}

        {/* Current slide (fades in) */}
        <motion.div
          key={`curr-${index}`}
          className="absolute inset-0 will-change-[opacity]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: FADE_SEC, ease: "easeInOut" }}
        >
          <Image
            src={images[index]}
            alt="Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      {/* Hero Content (left) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="max-w-3xl text-[44px] sm:text-[56px] md:text-[66px] leading-[1.05] font-extrabold tracking-tight">
          One Partner.
          <br className="hidden sm:block" />
          Infinite Possibilities.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-teal-100/90">
          Your business vision, our technology expertise — full-spectrum IT consulting and services that turn complexity into opportunity.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="rounded-full bg-[#FFD54A] text-[#0b2a35] px-6 py-3 font-bold shadow-sm hover:brightness-95"
          >
            Start a project
          </Link>
          <Link
            href="#services"
            className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/5"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
