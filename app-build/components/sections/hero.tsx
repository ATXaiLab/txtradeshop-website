import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-workshop-blue-dark min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-warm-cream) 1px, transparent 1px), linear-gradient(90deg, var(--color-warm-cream) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-dirt-orange/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 bg-dirt-orange rounded-full" />
          <span className="text-warm-cream/70 text-xs font-medium tracking-wide uppercase">
            Operations Systems · Austin, TX
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
          Stop Missing Calls.
          <br />
          Stop Losing Leads.
          <br />
          <span className="text-dirt-orange">Stop Doing Paperwork at Midnight.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-warm-cream/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Operations systems for Austin&apos;s trade businesses — HVAC, plumbing, electrical, roofing, and landscaping.
          We set up the systems that answer every call, follow up on every lead, and ask every customer for a review.{" "}
          <span className="text-warm-cream/90 font-medium">AI does the heavy lifting. You don&apos;t have to learn it.</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-dirt-orange hover:bg-dirt-orange-dark text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-lg transition-colors duration-200 cursor-pointer w-full sm:w-auto"
          >
            <a href="#book">
              Book a Free 20-Minute Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <span className="text-warm-cream/35 text-sm">No sales pitch. No obligation.</span>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {[
              { value: "29", label: "Austin trade businesses" },
              { value: "$1.2M+", label: "in additional revenue tracked" },
              { value: "3,400+", label: "missed calls recovered" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-heading font-bold text-xl sm:text-2xl text-white">{stat.value}</div>
                <div className="text-warm-cream/40 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
