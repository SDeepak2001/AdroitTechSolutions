"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // if missing: npm i lucide-react

type NavItem = { href: string; label: string };

const forBusiness: NavItem[] = [
  { href: "/#services", label: "Hire Talent" },
  { href: "/#services", label: "Contract & C2H" },
  { href: "/#services", label: "Direct Hire" },
  { href: "/#services", label: "Managed Teams" },
  { href: "/#work", label: "Case Studies" },
];

const forJobSeekers: NavItem[] = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/apply", label: "General Application" },
  { href: "/#about", label: "How We Hire" },
  { href: "/#contact", label: "Contact a Recruiter" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bizOpen, setBizOpen] = useState(false);
  const [jobOpen, setJobOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close dropdowns on route/hash change
  useEffect(() => {
    const close = () => { setBizOpen(false); setJobOpen(false); setMobileOpen(false); };
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 border-b transition-colors",
        scrolled
          ? "backdrop-blur bg-[#0b2a35]/90 border-[#0f3a49]"
          : "bg-[#0b2a35] border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* Remove the white badge if you switch to a transparent logo */}
          <span className="inline-flex items-center rounded-lg bg-white ring-1 ring-black/5 px-2 py-1">
            <Image
              src="/logo.png"
              alt="Adroit"
              width={124}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </span>
          <span className="sr-only">Adroit Tech Solutions</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {/* For Business (dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setBizOpen(true)}
            onMouseLeave={() => setBizOpen(false)}
          >
            <button
              className="nav-link text-[17px] font-semibold text-teal-100/85 hover:text-white inline-flex items-center gap-1"
              onClick={() => setBizOpen((v) => !v)}
            >
              For Business <ChevronDown size={16} />
            </button>
            {bizOpen && (
              <div className="absolute left-0 mt-3 w-64 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-2">
                {forBusiness.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* For Job Seekers (dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setJobOpen(true)}
            onMouseLeave={() => setJobOpen(false)}
          >
            <button
              className="nav-link text-[17px] font-semibold text-teal-100/85 hover:text-white inline-flex items-center gap-1"
              onClick={() => setJobOpen((v) => !v)}
            >
              For Job Seekers <ChevronDown size={16} />
            </button>
            {jobOpen && (
              <div className="absolute left-0 mt-3 w-64 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-2">
                {forJobSeekers.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Direct links */}
          <Link href="/jobs" className="nav-link text-[17px] font-semibold text-teal-100/85 hover:text-white">
            Jobs
          </Link>
          <a href="#about" className="nav-link text-[17px] font-semibold text-teal-100/85 hover:text-white">
            About
          </a>
          <a href="#contact" className="nav-link text-[17px] font-semibold text-teal-100/85 hover:text-white">
            Contact
          </a>
        </nav>

        {/* CTA + mobile trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-full bg-[#FFD54A] text-[#0b2a35] px-5 py-2.5 text-[17px] font-bold shadow-sm hover:brightness-95"
          >
            Hire Talent
          </a>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 text-white"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0b2a35]">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-2">
            <div>
              <div className="text-teal-100/85 text-sm font-semibold mb-2">For Business</div>
              <div className="grid gap-1">
                {forBusiness.map((i) => (
                  <Link
                    key={i.label}
                    href={i.href}
                    className="block rounded-lg px-3 py-2 text-[16px] text-teal-50 hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <div className="text-teal-100/85 text-sm font-semibold mb-2">For Job Seekers</div>
              <div className="grid gap-1">
                {forJobSeekers.map((i) => (
                  <Link
                    key={i.label}
                    href={i.href}
                    className="block rounded-lg px-3 py-2 text-[16px] text-teal-50 hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3 grid gap-1">
              <Link href="/jobs" className="block rounded-lg px-3 py-2 text-[16px] text-teal-50 hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                Jobs
              </Link>
              <a href="#about" className="block rounded-lg px-3 py-2 text-[16px] text-teal-50 hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                About
              </a>
              <a href="#contact" className="block rounded-lg px-3 py-2 text-[16px] text-teal-50 hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                Contact
              </a>
              <a
                href="#contact"
                className="mt-2 inline-flex justify-center rounded-full bg-[#FFD54A] text-[#0b2a35] px-5 py-2.5 text-[17px] font-bold shadow-sm hover:brightness-95"
                onClick={() => setMobileOpen(false)}
              >
                Hire Talent
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
