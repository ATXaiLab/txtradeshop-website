import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About — TX Trade Shop",
  description: "I'm Corby. I fix the back-office systems trade businesses promise themselves they'll fix every January. Operations consulting in Austin, TX.",
  openGraph: {
    title: "About Corby — TX Trade Shop",
    description: "I'm Corby. I fix the back-office systems trade businesses promise themselves they'll fix every January. Operations consulting in Austin, TX.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <section className="bg-workshop-blue-dark py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-6">About</p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            I&apos;m Corby. I fix the back-office systems trade businesses promise themselves they&apos;ll fix{" "}
            <span className="text-dirt-orange">every January.</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-warm-cream py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">

          {/* Why I Started This */}
          <div className="text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal mb-5">Why I Started This</h2>
            <div className="text-charcoal-light text-sm sm:text-base leading-relaxed space-y-4">
              <p>I spent years watching good trade businesses run themselves into the ground over the same three things: missed calls, no follow-up, no reviews. Not because the owners were bad at their work — most of them were the best in town at the actual trade. But the back-office side was held together with sticky notes, voicemail, and a personal Gmail address.</p>
              <p>Software vendors kept selling them tools and disappearing. Marketing agencies kept selling them ads they didn&apos;t need. Nobody was just doing the unsexy operational work that would actually move the needle.</p>
              <p className="font-medium text-charcoal">So I started TX Trade Shop to do exactly that.</p>
            </div>
          </div>

          {/* What I Believe */}
          <div className="bg-white rounded-2xl p-7 sm:p-10 border border-warm-cream-dark">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal mb-6 text-center">What I Believe</h2>
            <p className="text-charcoal-light text-sm sm:text-base mb-8 text-center">Three things shape every engagement:</p>
            <div className="space-y-7">
              {[
                {
                  title: "Trade owners aren't the problem. The systems are.",
                  body: "The chaos a small trade business runs in isn't a character flaw or a sign the owner is \"behind on technology.\" Software has been built for venture-backed SaaS buyers, not for someone running a 4-person crew out of a Ford F-250. The fix is system design, not personal effort.",
                },
                {
                  title: "Implementation is the work. Tools are the supplies.",
                  body: "Every other AI consultant I've met is fundamentally a software reseller with consulting bolted on. I'm the inverse. The work is the configuration, the integration, the documentation, the training. The tools are interchangeable. Anyone selling you AI is selling you the wrong thing.",
                },
                {
                  title: "Honesty over enthusiasm. Always.",
                  body: "The market is drowning in AI hype. I'd rather tell you a $30 fix beats a $3,000 system than make a sale that doesn't fit. About 15% of the audit calls I do end with me telling someone they don't need me yet. That number is part of the offer, not a bug in it.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-dirt-orange pl-5 sm:pl-6">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Trades */}
          <div className="text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal mb-5">Why Trades Specifically</h2>
            <div className="text-charcoal-light text-sm sm:text-base leading-relaxed space-y-4">
              <p>Two reasons. First, the operational gaps in trade businesses are the biggest in any small-business category — and the easiest to close with the right systems. Trade owners feel the pain of missed calls and no-follow-up more acutely than any other small-business owner because the jobs are bigger and the leads are fewer.</p>
              <p>Second, trades is where I&apos;m from. I understand what a service truck looks like at 6 AM. I&apos;m not learning the industry on your dime.</p>
            </div>
          </div>

          {/* Why Austin */}
          <div className="text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal mb-5">Why Austin</h2>
            <div className="text-charcoal-light text-sm sm:text-base leading-relaxed space-y-4">
              <p>Local hands-on relationships are where I do my best work. I&apos;m based in Austin, most of my clients are in Central Texas — <span className="font-medium text-charcoal">Round Rock, Cedar Park, Pflugerville, Buda, Kyle, Georgetown, Lakeway, Dripping Springs.</span></p>
              <p>I&apos;ll work with trade businesses anywhere in Texas remotely, but the Austin-specific relationships compound in ways the remote ones don&apos;t.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-workshop-blue-dark rounded-2xl p-7 sm:p-10 text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">What Happens Next</h2>
            <p className="text-warm-cream/70 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
              If you&apos;re a trade owner in Texas and your operations feel like duct tape, the audit call is free and 20 minutes long. We&apos;ll find the three biggest leaks. I&apos;ll tell you straight whether the engagement makes sense.
            </p>
            <Button asChild size="lg" className="bg-dirt-orange hover:bg-dirt-orange-dark text-white font-semibold px-8 py-6 rounded-lg cursor-pointer w-full sm:w-auto">
              <a href="#book">Book the Free Audit <ArrowRight className="w-4 h-4 ml-2" /></a>
            </Button>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-warm-cream/40 text-sm">
              <a href="mailto:corby@txtradeshop.com" className="hover:text-warm-cream/80 transition-colors flex items-center gap-1.5">
                <Mail className="w-4 h-4" />corby@txtradeshop.com
              </a>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" />(409) 281-3841</span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />Austin, TX</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
