"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const trades = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Landscaping",
  "General Contracting",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    trade: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
        <CheckCircle className="w-10 h-10 text-green-500" />
        <h3 className="font-heading font-bold text-xl text-white">
          Request received.
        </h3>
        <p className="text-warm-cream/60 text-sm max-w-xs">
          You&apos;ll hear from Corby within one business day to confirm your
          20-minute audit call.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-warm-cream/30 focus:outline-none focus:border-dirt-orange/60 focus:bg-white/8 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-warm-cream/50 uppercase tracking-wide mb-1.5">
            Your name <span className="text-dirt-orange">*</span>
          </label>
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Mike Rodriguez"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-warm-cream/50 uppercase tracking-wide mb-1.5">
            Business name <span className="text-dirt-orange">*</span>
          </label>
          <input
            name="business"
            type="text"
            required
            value={form.business}
            onChange={handleChange}
            placeholder="Rodriguez HVAC"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-warm-cream/50 uppercase tracking-wide mb-1.5">
            Email <span className="text-dirt-orange">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="mike@yourbusiness.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-warm-cream/50 uppercase tracking-wide mb-1.5">
            Phone <span className="text-dirt-orange">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(512) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-warm-cream/50 uppercase tracking-wide mb-1.5">
          Trade
        </label>
        <select
          name="trade"
          value={form.trade}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" className="bg-workshop-blue-dark">
            Select your trade
          </option>
          {trades.map((t) => (
            <option key={t} value={t} className="bg-workshop-blue-dark">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-warm-cream/50 uppercase tracking-wide mb-1.5">
          What&apos;s your biggest operational headache right now?
        </label>
        <textarea
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Missed calls, no reviews, paperwork piling up..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        size="lg"
        className="w-full bg-dirt-orange hover:bg-dirt-orange-dark disabled:opacity-60 text-white font-semibold text-sm sm:text-base py-6 rounded-lg transition-colors cursor-pointer"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Request My Free Audit
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>

      <p className="text-center text-warm-cream/25 text-xs">
        No sales pitch. Corby will confirm a time within one business day.
      </p>
    </form>
  );
}
