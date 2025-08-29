"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";

/**
 * 🔧 Set your links here:
 * - CALENDLY_30: your 30-min event link (Event Type URL), add ?hide_gdpr_banner=1 for a clean embed
 * - GOOGLE_FORM_EMBED: the Google Form "Embed" URL (submissions go to the linked Google Sheet)
 *
 * How to get GOOGLE_FORM_EMBED:
 *  1) Create a Google Form → Responses → "Link to Sheets" (creates the spreadsheet)
 *  2) Send (paper airplane) → <> Embed → copy the "src" URL (it looks like .../viewform?embedded=true)
 */
const CALENDLY_30 =
  "https://calendly.com/deepaksde24/30min";
const GOOGLE_FORM_EMBED =
  "https://forms.gle/nNoNXHJuXT3CdNXB6"; // <-- replace with your form embed URL

export default function Contact() {
  const [openCal, setOpenCal] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  function openFormOrExplain() {
    if (!GOOGLE_FORM_EMBED || GOOGLE_FORM_EMBED.includes("FORM_ID")) {
      alert(
        "Please set GOOGLE_FORM_EMBED in Contact.tsx to your Google Form embed URL (Send → <> Embed)."
      );
      return;
    }
    setOpenForm(true);
  }

  return (
    <section id="contact" className="bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
            Let’s build something
          </h2>
          <p className="mt-2 text-neutral-600">
            Book time instantly or share your project details. We usually
            respond within one business day.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => setOpenCal(true)}
            className="rounded-full bg-[#0b2a35] text-white px-6 py-3 font-semibold hover:bg-[#0e3644]"
          >
            Book a 30-min intro call
          </button>

          <button
            onClick={openFormOrExplain}
            className="rounded-full border border-neutral-300 text-neutral-800 px-6 py-3 font-semibold hover:bg-neutral-50"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Calendly modal */}
      {openCal && (
        <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl aspect-[16/10] bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              aria-label="Close"
              onClick={() => setOpenCal(false)}
              className="absolute top-3 right-3 z-10 rounded-full bg-black/70 text-white p-1.5 hover:bg-black"
            >
              <X size={18} />
            </button>
            <iframe
              title="Calendly — 30-min intro"
              src={CALENDLY_30}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Google Form modal (writes to your linked Google Sheet) */}
      {openForm && (
        <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl aspect-[16/12] bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              aria-label="Close"
              onClick={() => setOpenForm(false)}
              className="absolute top-3 right-3 z-10 rounded-full bg-black/70 text-white p-1.5 hover:bg-black"
            >
              <X size={18} />
            </button>
            <iframe
              title="Contact Us — Project details"
              src={GOOGLE_FORM_EMBED}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
