import { Mail, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-workshop-blue-dark py-16 sm:py-24" id="book">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-4">
            Free 20-Minute Audit
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            20 minutes.{" "}
            <span className="text-dirt-orange">Three leaks found.</span>
            <br />
            Zero pressure.
          </h2>
          <p className="text-warm-cream/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Pick a time that works for you. Corby will call you at the scheduled time — no prep needed.
          </p>
        </div>

        {/* Calendar embed */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white max-w-2xl mx-auto">
          <iframe
            src="https://calendar.app.google/doaLeoB7gBZ9yHuy8"
            style={{ border: 0 }}
            width="100%"
            height="420"
            title="Book a Free Operations Audit with TX Trade Shop"
            className="block w-full"
          />
        </div>

        {/* Fallback contact */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-warm-cream/40 text-sm">
          <span>Prefer to reach out directly?</span>
          <a
            href="mailto:corby@txtradeshop.com"
            className="hover:text-warm-cream/80 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            corby@txtradeshop.com
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href="tel:+14092813841"
            className="hover:text-warm-cream/80 transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-4 h-4" />
            (409) 281-3841
          </a>
        </div>
      </div>
    </section>
  );
}
