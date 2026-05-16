import { MapPin } from "lucide-react";

const trades = ["HVAC", "Plumbing", "Electrical", "Roofing", "Remodeling", "Service", "Landscaping"];

export function TrustStrip() {
  return (
    <section className="bg-white border-b border-warm-cream-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2 text-sm text-charcoal-light">
            <MapPin className="w-4 h-4 text-dirt-orange shrink-0" />
            <span className="font-medium text-charcoal">Built in Austin.</span>
          </div>
          <span className="hidden sm:inline text-warm-cream-dark">·</span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {trades.map((trade) => (
              <span key={trade} className="text-charcoal-light text-sm">{trade}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
