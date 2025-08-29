"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null); setSent(false); setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, ua: navigator.userAgent };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed to send");
      setSent(true);
      form.reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-white border-top border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">Let’s build something</h2>
          <p className="mt-2 text-neutral-600">Tell us about your project and timeline. We’ll reply within one business day.</p>
        </div>

        {sent && (
          <div className="mt-6 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 px-4 py-3 flex items-center gap-2 max-w-3xl">
            <CheckCircle2 className="h-5 w-5" /> Thanks! Your message was sent.
          </div>
        )}
        {error && (
          <div className="mt-6 rounded-xl bg-rose-50 text-rose-900 border border-rose-200 px-4 py-3 flex items-center gap-2 max-w-3xl">
            <AlertCircle className="h-5 w-5" /> {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-800">Your name*</label>
              <input id="name" name="name" required className="h-12 rounded-xl bg-white border border-neutral-200 px-4 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-800">Email*</label>
              <input id="email" name="email" type="email" required className="h-12 rounded-xl bg-white border border-neutral-200 px-4 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="company" className="text-sm font-medium text-neutral-800">Company</label>
              <input id="company" name="company" className="h-12 rounded-xl bg-white border border-neutral-200 px-4 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="details" className="text-sm font-medium text-neutral-800">Project details*</label>
              <textarea id="details" name="details" required rows={6} className="rounded-xl bg-white border border-neutral-200 px-4 py-3 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100" />
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-sm text-neutral-500">We’ll never share your email. By submitting, you agree we can contact you about this inquiry.</p>
            <button disabled={loading} type="submit" className="rounded-full bg-[#0b2a35] text-white px-6 py-3 font-semibold hover:bg-[#0e3644] disabled:opacity-60">
              {loading ? "Sending…" : "Send inquiry"}
            </button>
          </div>
        </form>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-neutral-700">
          <div className="flex items-center gap-3"><Mail size={18}/> hr@adroittechsolutions.com</div>
          <div className="flex items-center gap-3"><Phone size={18}/> +1 (503) 567-9964</div>
          <div className="flex items-center gap-3"><MapPin size={18}/> Portland, OR</div>
        </div>
      </div>
    </section>
  );
}
