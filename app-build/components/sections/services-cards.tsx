import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Mail, PhoneIncoming, Star, Globe, Megaphone, FileText, Mic, Users, BookOpen, CalendarCheck, Wrench } from "lucide-react";

const tiers = [
  {
    id: "foundation",
    tier: "Tier 1",
    name: "Foundation Setup",
    tagline: "Stop the bleeding.",
    pitch: "Every call answered. Professional email that doesn't say @gmail.com. Google Business Profile set up and working. The three foundations every trade business needs before anything else makes sense.",
    features: [
      { icon: Mail, text: "Professional email + custom domain" },
      { icon: PhoneIncoming, text: "AI receptionist — 24/7 call answering" },
      { icon: Star, text: "Review automation wired to job completions" },
      { icon: Globe, text: "Google Business Profile setup + optimization" },
    ],
    price: "$895",
    priceNote: "one-time",
    splitPay: null,
    bestFor: "Under $200K revenue",
    timeline: "7–10 business days",
    roi: "One recovered missed call typically pays for this twice over.",
    accent: false,
  },
  {
    id: "growth",
    name: "Growth Engine",
    tier: "Tier 2",
    tagline: "Look and operate like a real company.",
    pitch: "You've fixed the bleeding. Now your business needs to actually look like a real company — to customers, to Google, and to itself. Same tight operations as Foundation, plus the marketing and quoting infrastructure that turns \"guy with a truck\" into a recognizable local brand.",
    features: [
      { icon: Check, text: "Everything in Foundation" },
      { icon: Megaphone, text: "Social content pipeline — 2 posts/week, ~15 min owner time" },
      { icon: FileText, text: "AI quote + estimate generation in your voice" },
      { icon: Mic, text: "Review automation with negative-feedback escalation path" },
    ],
    price: "$2,750",
    priceNote: "one-time",
    splitPay: "$1,850 upfront + $225/mo × 6",
    bestFor: "$200K–$500K revenue",
    timeline: "3–4 weeks",
    roi: "Most owners upgrade to Tier 3 within 6 months once the foundations are humming.",
    accent: true,
  },
  {
    id: "full-ops",
    tier: "Tier 3",
    name: "Full Operations Buildout",
    tagline: "Every operational gap closed.",
    pitch: "The complete system. Every operational gap a small trade business has — closed, integrated, documented, and running without the owner's daily attention. Built for businesses ready to grow past the point where the owner can hold everything in their head.",
    features: [
      { icon: Check, text: "Everything in Tiers 1 and 2" },
      { icon: Mic, text: "Voice-to-invoice pipeline for your 5 most common job types" },
      { icon: Users, text: "Lead intake CRM + AI chat widget with auto follow-up" },
      { icon: Wrench, text: "CompanyCam rollout with usage SOP for all field staff" },
      { icon: CalendarCheck, text: "Recurring service reminder sequences (email + text)" },
      { icon: BookOpen, text: "Custom playbook — a written SOP your business owns" },
    ],
    price: "$8,950",
    priceNote: "setup + $750/mo × 3",
    splitPay: "$8,750 total. Optional retainer from month 4 at $500–$750/mo.",
    bestFor: "$300K+ revenue",
    timeline: "6–8 weeks",
    roi: "Break-even in 2–3 months. One additional job per month at a $500 ticket covers this inside year one.",
    accent: false,
  },
];

export function ServicesCards() {
  return (
    <section className="bg-white py-16 sm:py-24" id="services">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-4">
            Services
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight mb-4">
            Three packages.{" "}
            <span className="text-workshop-blue">One outcome.</span>
          </h2>
          <p className="text-charcoal-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Pick the tier that matches where your business is today. Every tier ends with a working system, real training, and documentation you own.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-warm-cream-dark rounded-xl overflow-hidden border border-warm-cream-dark">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col p-6 sm:p-8 ${tier.accent ? "bg-workshop-blue-dark" : "bg-white"}`}
            >
              <div className="mb-5">
                <span className={`text-xs font-bold uppercase tracking-widest ${tier.accent ? "text-dirt-orange" : "text-charcoal-light"}`}>
                  {tier.tier}
                </span>
                <h3 className={`font-heading font-bold text-xl sm:text-2xl mt-1 mb-1 ${tier.accent ? "text-white" : "text-charcoal"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm font-medium italic ${tier.accent ? "text-warm-cream/70" : "text-charcoal-light"}`}>
                  &ldquo;{tier.tagline}&rdquo;
                </p>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${tier.accent ? "text-warm-cream/60" : "text-charcoal-light"}`}>
                {tier.pitch}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <feature.icon className={`w-4 h-4 shrink-0 mt-0.5 ${tier.accent ? "text-dirt-orange" : "text-workshop-blue"}`} />
                    <span className={`text-sm ${tier.accent ? "text-warm-cream/80" : "text-charcoal"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`pt-5 border-t ${tier.accent ? "border-white/10" : "border-warm-cream-dark"}`}>
                <div className="mb-1 flex items-baseline gap-2 flex-wrap">
                  <span className={`font-heading font-bold text-2xl sm:text-3xl ${tier.accent ? "text-white" : "text-charcoal"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ${tier.accent ? "text-warm-cream/50" : "text-charcoal-light"}`}>
                    {tier.priceNote}
                  </span>
                </div>
                {tier.splitPay && (
                  <p className={`text-xs mb-1 ${tier.accent ? "text-warm-cream/40" : "text-charcoal-light"}`}>
                    or {tier.splitPay}
                  </p>
                )}
                <p className={`text-xs mb-1 ${tier.accent ? "text-warm-cream/40" : "text-charcoal-light"}`}>
                  Best for {tier.bestFor} · {tier.timeline}
                </p>
                <p className={`text-xs mb-5 italic ${tier.accent ? "text-warm-cream/35" : "text-charcoal-light"}`}>
                  {tier.roi}
                </p>
                <Link
                  href="/services"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    tier.accent
                      ? "text-dirt-orange hover:text-dirt-orange-light"
                      : "text-workshop-blue hover:text-workshop-blue-dark"
                  }`}
                >
                  See full details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Below CTA */}
        <div className="mt-8 sm:mt-10 pt-8 border-t border-warm-cream-dark text-center">
          <p className="text-charcoal-light text-sm max-w-md mx-auto mb-5">
            Not sure which tier fits? The free 20-minute audit tells you. About 15% of the time we tell you to wait — we&apos;d rather lose the sale.
          </p>
          <Button
            asChild
            className="bg-dirt-orange hover:bg-dirt-orange-dark text-white font-semibold px-6 py-5 rounded-lg transition-colors cursor-pointer"
          >
            <a href="#book">
              Book the Free Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
