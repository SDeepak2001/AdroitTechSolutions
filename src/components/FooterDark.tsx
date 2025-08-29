import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/blogs", label: "Blogs" },
  { href: "/careers", label: "Careers" },
  { href: "/services", label: "Services" },
];

const services = [
  { href: "/services/consulting", label: "IT Consulting & Strategy" },
  { href: "/services/ai", label: "AI & Machine Learning" },
  { href: "/services/cloud", label: "Cloud & DevOps" },
  { href: "/services/backend", label: "Backend & APIs" },
  { href: "/services/security", label: "Security & Compliance" },
  { href: "/services/apps", label: "Web & Mobile Apps" },
];

export default function FooterDark() {
  return (
    <footer className="border-t border-white/10 bg-[#0b2a35] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + tagline */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo_white.png"
                alt="Adroit Tech Solutions"
                width={152}
                height={42}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-teal-100/85 max-w-sm">
              Consulting, cloud, data &amp; AI solutions that turn complexity into opportunity.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm">
              <Link href="/privacy" className="text-teal-100/85 hover:text-white">
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/terms" className="text-teal-100/85 hover:text-white">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-teal-100/85 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-teal-100/85 hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="text-sm font-semibold text-white">Get In Touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-teal-100/70" />
                <a href="tel:+15104491643" className="text-teal-100/85 hover:text-white">
                  +1 (510) 449-1643
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-teal-100/70" />
                <a
                  href="mailto:info@adroittechsolution.com"
                  className="text-teal-100/85 hover:text-white"
                >
                  info@adroittechsolution.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-teal-100/70" />
                <span className="text-teal-100/85">Vancouver, WA</span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={16} className="text-teal-100/70" />
                <a
                  href="https://www.linkedin.com/company/adroit-tech-solutions-inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-100/85 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-sm text-teal-100/80">
          <p>© {new Date().getFullYear()} Adroit Tech Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/blogs" className="hover:text-white">
              Blogs
            </Link>
            <Link href="/careers" className="hover:text-white">
              Careers
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
