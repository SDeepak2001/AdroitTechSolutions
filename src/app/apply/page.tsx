"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ApplyPage() {
  const params = useSearchParams();
  const role = params.get("role") ?? "General Application";
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setErr(null); setSent(false);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, role, ua: navigator.userAgent };
    try {
      const r = await fetch("/api/apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const j = await r.json();
      if (!r.ok || !j.ok) throw new Error(j.error || "Failed");
      setSent(true); form.reset();
    } catch (e:any) { setErr(e.message || "Error"); }
    finally { setLoading(false); }
  }

  return (
    <section className="bg-white min-h-screen pt-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold">Apply — {role.replaceAll("-", " ")}</h1>
        <p className="mt-2 text-neutral-600">We’ll review and get back within 2 business days.</p>

        {sent && <div className="mt-6 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 px-4 py-3">Thanks! Your application was sent.</div>}
        {err && <div className="mt-6 rounded-xl bg-rose-50 text-rose-900 border border-rose-200 px-4 py-3">{err}</div>}

        <form className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input name="name" required placeholder="Full name" className="h-12 rounded-xl bg-white border border-neutral-200 px-4" />
            <input name="email" type="email" required placeholder="Email" className="h-12 rounded-xl bg-white border border-neutral-200 px-4" />
            <input name="phone" placeholder="Phone" className="h-12 rounded-xl bg-white border border-neutral-200 px-4" />
            <input name="linkedin" placeholder="LinkedIn URL" className="h-12 rounded-xl bg-white border border-neutral-200 px-4" />
            <input name="workAuth" placeholder="Work authorization" className="h-12 rounded-xl bg-white border border-neutral-200 px-4 md:col-span-2" />
            <textarea name="notes" rows={6} placeholder="Notes / key achievements / start date" className="rounded-xl bg-white border border-neutral-200 px-4 py-3 md:col-span-2" />
          </div>
          <button disabled={loading} type="submit"
            className="mt-6 rounded-full bg-[#0b2a35] text-white px-6 py-3 font-semibold hover:bg-[#0e3644] disabled:opacity-60">
            {loading ? "Submitting…" : "Submit application"}
          </button>
        </form>
      </div>
    </section>
  );
}
