import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Mail, PhoneIncoming, Star, Megaphone, FileText, Globe, Mic, Users, BookOpen, CalendarCheck, Wrench } from "lucide-react";

const tiers = [
  {
    id: "foundation",
    tier: "Tier 1",
    name: "Foundation Setup",
    tagline: "Stop the bleeding.",
    description:
      "Every call answered. Every customer asked for a review. Professional email that doesn't end in @gmail.com. The three foundations every trade business needs before anything else makes sense.",
    features: [
      { icon: Mail, text: "Professional email + custom domain" },
      { icon: PhoneIncoming, text: "AI receptionist — 24/7 call answering" },
      { icon: Star, text: "Automated review generation" },
    ],
    price: "$1,250",
    priceNote: "one-time",
    bestFor: "Under $200K revenue",
    timeline: "7–10 business days",
    accent: false,
  },
  {
    id: "growth",
    name: "Growth Engine",
    tier: "Tier 2",
    tagline: "Look and operate like a real company.",
    description:
      "Everything in Foundation, plus the systems that turn your business from \"guy with a truck\" into a brand customers find, trust, and refer.",
    features: [
      { icon: Check, text: "Everything in Foundation" },
      { icon: Megaphone, text: "Social content pipeline — 2 posts/week" },
      { icon: FileText, text: "AI-powered quote and estimate generation" },
      { icon: Globe, text: "New website + optimized Google Business Profile" },
    ],
    price: "$3,750",
    priceNote: "one-time",
    bestFor: "$200K–$500K revenue",
    timeline: "3–4 weeks",
    accent: true,
  },
  {
    id: "full-ops",
    tier: "Tier 3",
    name: "Full Operations",
    tagline: "Every operational gap closed.",
    description:
      "The complete system. All operational gaps closed, every workflow documented, every tool integrated. Built for trade businesses ready to scale without burning out the owner.",
    features: [
      { icon: Check, text: "Everything in Growth Engine" },
      { icon: Mic, text: "Voice-to-invoice pipeline" },
      { icon: Users, text: "Lead intake CRM + AI chat widget" },
      { icon: Wrench, text: "CompanyCam rollout to all field staff" },
      { icon: CalendarCheck, text: "Recurring service reminders" },
      { icon: BookOpen, text: "Custom playbook — your owned SOP doc" },
    ],
    price: "$9,500",
    priceNote: "setup + $750/mo × 3",
    bestFor: "$300K+ revenue",
    timeline: "6–8 weeks",
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
            Most trade businesses don&apos;t need more software. They need the right software, set up correctly, working together.
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
                <p className={`text-sm font-medium ${tier.accent ? "text-warm-cream/70" : "text-charcoal-light"}`}>
                  {tier.tagline}
                </p>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${tier.accent ? "text-warm-cream/60" : "text-charcoal-light"}`}>
                {tier.description}
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
                <div className="mb-1">
                  <span className={`font-heading font-bold text-2xl sm:text-3xl ${tier.accent ? "text-white" : "text-charcoal"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ml-2 ${tier.accent ? "text-warm-cream/50" : "text-charcoal-light"}`}>
                    {tier.priceNote}
                  </span>
                </div>
                <p className={`text-xs mb-4 ${tier.accent ? "text-warm-cream/40" : "text-charcoal-light"}`}>
                  Best for {tier.bestFor} · {tier.timeline}
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
            Not sure which tier fits? About 15% of audit calls end with us telling you to wait. We&apos;d rather lose a sale than sell you something that doesn&apos;t fit.
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
