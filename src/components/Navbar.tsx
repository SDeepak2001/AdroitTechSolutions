"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = { href: string; label: string };

const MAIN_NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/#about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  // keep only the yellow CTA for Contact
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-[#0b2a35] border-[#0f3a49]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Adroit Tech Solutions"
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="sr-only">Adroit Tech Solutions</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link relative text-[18px] font-semibold text-teal-100/85 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile trigger */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden md:inline-flex rounded-full bg-[#FFD54A] text-[#0b2a35] px-6 py-2.5 text-[18px] font-bold shadow-sm hover:brightness-95"
          >
            Contact Us
          </Link>
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
            <div className="grid gap-1">
              {MAIN_NAV.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="block rounded-lg px-3 py-2 text-[16px] text-teal-50 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-2 inline-flex justify-center rounded-full bg-[#FFD54A] text-[#0b2a35] px-5 py-2.5 text-[17px] font-bold shadow-sm hover:brightness-95"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
