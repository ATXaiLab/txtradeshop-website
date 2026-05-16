import { ArrowRight, CalendarDays, Clock, Mail, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-workshop-blue-dark py-16 sm:py-24" id="book">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-4">
          Free 20-Minute Audit
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
          20 minutes.{" "}
          <span className="text-dirt-orange">Three leaks found.</span>
          <br />
          Zero pressure.
        </h2>
        <p className="text-warm-cream/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10">
          Pick a time that works for you. Corby will call you at the scheduled time — no prep needed.
        </p>

        {/* What to expect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-xl mx-auto">
          {[
            { icon: Clock, text: "20 minutes, no more" },
            { icon: CalendarDays, text: "Pick any open slot on Corby's calendar" },
            { icon: ArrowRight, text: "No sales pitch — just an honest look at your ops" },
            { icon: ArrowRight, text: "15% of the time we tell you not to hire us" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <item.icon className="w-4 h-4 text-dirt-orange shrink-0 mt-0.5" />
              <span className="text-warm-cream/70 text-sm">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="https://calendar.app.google/doaLeoB7gBZ9yHuy8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-dirt-orange hover:bg-dirt-orange-dark text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors duration-200"
        >
          <CalendarDays className="w-5 h-5" />
          Pick a Time on Google Calendar
          <ArrowRight className="w-4 h-4" />
        </a>

        <p className="text-warm-cream/30 text-xs mt-4">Opens Google Calendar · No account required</p>

        {/* Direct contact */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-warm-cream/40 text-sm">
          <span>Prefer to reach out directly?</span>
          <a href="mailto:corby@txtradeshop.com" className="hover:text-warm-cream/80 transition-colors flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            corby@txtradeshop.com
          </a>
          <span className="hidden sm:inline">·</span>
          <a href="tel:+14092813841" className="hover:text-warm-cream/80 transition-colors flex items-center gap-1.5">
            <Phone className="w-4 h-4" />
            (409) 281-3841
          </a>
        </div>
      </div>
    </section>
  );
}
