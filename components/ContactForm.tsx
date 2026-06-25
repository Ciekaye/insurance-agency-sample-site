"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

const lines = [
  "Business", "Personal", "Life + Health", "Contractors",
  "Trucking", "Specialty", "Bonds", "Other",
];

const inputClass =
  "w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-navy " +
  "placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
const labelClass = "mb-1.5 block text-sm font-medium text-navy";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // Sample site: simulate a submission. Wire to an API route or Resend later.
    setTimeout(() => setStatus("done"), 800);
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
          <Check size={24} />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-navy">Thanks — we&apos;ll be in touch</h3>
        <p className="mt-2 text-slate-600">
          An independent advisor will review your request and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-200 bg-white p-7 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Full name</label>
          <input id="name" required className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input id="phone" type="tel" className={inputClass} placeholder="(317) 555-0123" />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="email">Email</label>
        <input id="email" type="email" required className={inputClass} placeholder="you@example.com" />
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="line">What can we help you insure?</label>
        <select id="line" className={inputClass} defaultValue="">
          <option value="" disabled>Select a coverage type</option>
          {lines.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="message">How can we help?</label>
        <textarea id="message" rows={4} className={inputClass} placeholder="Tell us a little about what you need." />
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-primary mt-6 w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          "Request My Free Quote"
        )}
      </button>
    </form>
  );
}
