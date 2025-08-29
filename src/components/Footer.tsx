// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Linkedin, X as XIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-50 border-t border-neutral-200">
      {/* decorative glow behind the brand */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -left-20 h-64 w-64 rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(25,181,254,.25), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-24 h-64 w-64 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,229,168,.20), transparent 60%)" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + policies */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Adroit Tech Solutions"
                width={170}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
              <span className="sr-only">Adroit Tech Solutions</span>
            </Link>

            <p className="text-sm text-neutral-500 max-w-xs">
              Cloud, data, and product engineering that deliver measurable outcomes.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <FooterPolicyLink href="#">Privacy Policy</FooterPolicyLink>
              <span className="h-3 w-px bg-neutral-300" />
              <FooterPolicyLink href="#">Terms &amp; Conditions</FooterPolicyLink>
            </div>
          </div>

          {/* Company */}
          <FooterColumn title="Company">
            <FooterLink href="/#about">About Us</FooterLink>
            <FooterLink href="/blogs">Blogs</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/#services">Services</FooterLink>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            <FooterLink href="/#services">Cloud Services</FooterLink>
            <FooterLink href="/#services">Enterprise Solutions</FooterLink>
            <FooterLink href="/#services">Data Analytics</FooterLink>
            <FooterLink href="/#services">Technical Documentation</FooterLink>
            <FooterLink href="/#services">Cyber Security</FooterLink>
          </FooterColumn>

          {/* Get in Touch */}
          <FooterColumn title="Get In Touch">
            <FooterContact icon={<Phone size={16} />} text="+1 (503) 567-9964" />
            <FooterContact icon={<Mail size={16} />} text="hr@adroittechsolutions.com" />
            <FooterContact
              icon={<MapPin size={16} />}
              text={
                <>
                  Portland, OR
                  <br />
                  United States
                </>
              }
            />
            <div className="pt-1 flex items-center gap-3">
              <Social href="#" label="Facebook">
                <Facebook size={16} />
              </Social>
              <Social href="#" label="X / Twitter">
                <XIcon size={16} />
              </Social>
              <Social href="#" label="LinkedIn">
                <Linkedin size={16} />
              </Social>
            </div>
          </FooterColumn>
        </div>

        {/* divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Adroit Tech Solutions. All rights reserved.</p>

          {/* mini nav with underline hover */}
          <div className="flex items-center gap-6">
            <MiniLink href="/#services">Services</MiniLink>
            <MiniLink href="/blogs">Blogs</MiniLink>
            <MiniLink href="/careers">Careers</MiniLink>
            <MiniLink href="/#contact">Contact</MiniLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- small building blocks ---------- */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-neutral-600 font-semibold tracking-wide">{title}</h3>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center text-neutral-700 hover:text-black"
      >
        <span className="relative">
          {children}
          <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-neutral-800/70 transition-all group-hover:w-full rounded-full" />
        </span>
      </Link>
    </li>
  );
}

function FooterPolicyLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-neutral-500 hover:text-neutral-800">
      {children}
    </Link>
  );
}

function FooterContact({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 text-neutral-700">
      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm border border-neutral-200">
        {icon}
      </span>
      <span>{text}</span>
    </li>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      aria-label={label}
      href={href}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white border border-neutral-200 shadow-sm text-neutral-600 hover:text-black hover:border-neutral-300 transition"
    >
      {children}
    </Link>
  );
}

function MiniLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative text-neutral-600 hover:text-neutral-900">
      <span className="relative">
        {children}
        <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-neutral-800/70 transition-all hover:w-full rounded-full" />
      </span>
    </Link>
  );
}
