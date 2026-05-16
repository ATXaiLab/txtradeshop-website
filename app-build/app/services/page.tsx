import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  ArrowRight, Check, X, Mail, Phone,
  PhoneIncoming, Megaphone, FileText, Globe, Mic, Users,
  BookOpen, CalendarCheck, Wrench, Clock, ClipboardList,
} from "lucide-react";
import { WhoThisIsntFor } from "@/components/sections/who-this-isnt-for";
import { BuyButton } from "@/components/checkout-modal";

export const metadata: Metadata = {
  title: "Services — TX Trade Shop",
  description: "Three tiers of operations systems for Austin trade businesses. Foundation Setup, Growth Engine, and Full Operations Buildout.",
};

const tiers = [
  {
    id: "foundation",
    tier: "TIER 1",
    name: "Foundation Setup",
    tagline: "STOP THE BLEEDING",
    pitch: "The four foundations every trade business needs before anything else makes sense: a professional email, an AI receptionist that answers every call, a complete audit of your review situation across every platform, and Google Business Profile set up correctly. If you're still operating from a Gmail address and missing calls, this is where you start. Nothing else matters until these are running.",
    features: [
      { icon: Mail, title: "Professional email + custom domain", desc: "We register your domain, set up Google Workspace or Microsoft 365, migrate any existing email, and configure professional signatures for everyone on the team." },
      { icon: PhoneIncoming, title: "AI receptionist (24/7 call answering)", desc: "Configured with your actual call scripts, services, pricing rules, and booking calendar. Answers calls when you're on a job, asleep, or on vacation. Texts you a summary of every conversation in real time." },
      { icon: ClipboardList, title: "Complete Automated Customer Review Audit", desc: "Full audit of your review situation across Google, Yelp, Facebook, BBB, Angi, and trade-specific directories. We pull every review, identify negative ones that never got a response, flag what's silently hurting you in search results, and benchmark you against your top 3 competitors. You get a written 8–12 page report covering exactly where the gaps are, what to fix first, and what each fix is worth in projected new business." },
      { icon: Globe, title: "Google Business Profile setup + optimization", desc: "The real lead driver for local trades. We handle setup, photo population, and review flow integration so your profile actually ranks." },
      { icon: Users, title: "One 60-minute training session", desc: "Walkthrough so you know how to read AI receptionist transcripts, respond to reviews from your phone, and use the audit report." },
      { icon: CalendarCheck, title: "30-day check-in call", desc: "We tune the configuration based on the first month of real calls and reviews. Most clients have one or two small adjustments. Some have none." },
    ],
    forList: ["Trade businesses doing under $200K in annual revenue", "Anyone still using a personal Gmail for business", "Solo operators or 2–3 person shops", "Owners who know they're missing calls but haven't done anything about it"],
    notForList: ["Businesses already at $300K+ — you'll outgrow this in 6 months. Start with Growth Engine instead."],
    price: "$895", priceNote: "one-time", timeline: "7–10 business days",
    roi: "One recovered missed call typically pays for this twice over.",
    splitPay: null,
    stripeId: "tier1",
    splitStripeId: null,
    accent: false,
  },
  {
    id: "growth",
    tier: "TIER 2",
    name: "Growth Engine",
    tagline: "LOOK AND OPERATE LIKE A REAL COMPANY",
    pitch: "You've fixed the bleeding. Now your business needs to actually look like a real company — to customers, to Google, and to itself. Same tight operations as Foundation, plus the marketing and quoting infrastructure that turns \"guy with a truck\" into a recognizable local brand.",
    features: [
      { icon: Check, title: "Everything in Foundation", desc: "Email, AI receptionist, Complete Customer Review Audit, Google Business Profile — all included and already running. The review automation below builds on the audit from Foundation." },
      { icon: Globe, title: "Professional Business Website (5 pages)", desc: "AI-built but human-edited, with copy that actually sells. Mobile-first. Loads fast. Five pages: Home, Services, About, Contact, and one more." },
      { icon: Megaphone, title: "Social content pipeline", desc: "Buffer, Pictory, and Canva configured. Plus a documented workflow for turning CompanyCam photos into 2 polished posts per week. Total owner time: ~15 minutes a week." },
      { icon: FileText, title: "AI quote and estimate generation", desc: "Custom template loaded with your pricing, terminology, brand voice. 5 minutes of voice notes → polished estimate in 60 seconds." },
      { icon: Star, title: "Review automation with negative-feedback escalation", desc: "Same review flow as Foundation, upgraded to route negative responses to you privately before they hit Google." },
      { icon: Users, title: "Two 60-minute training sessions", desc: "One on the content pipeline, one on the quoting workflow." },
      { icon: CalendarCheck, title: "30 days support + 60-day check-in", desc: "Email support while systems bed in. Second check-in at 60 days to tune." },
    ],
    forList: ["Businesses doing $200K–$500K that have outgrown manual everything", "Owners who want to stop being the bottleneck for marketing and quoting"],
    notForList: ["Sub-$200K businesses — start with Foundation, prove ROI, then upgrade", "$500K+ businesses with multiple crews — you need Full Operations"],
    price: "$2,750", priceNote: "one-time", timeline: "3–4 weeks",
    roi: "Most owners upgrade to Tier 3 within 6 months once the foundations are humming.",
    splitPay: "$1,850 upfront + $225/mo × 6",
    stripeId: "tier2-full",
    splitStripeId: "tier2-split",
    accent: true,
  },
  {
    id: "full-ops",
    tier: "TIER 3",
    name: "Full Operations Buildout",
    tagline: "EVERY OPERATIONAL GAP CLOSED",
    pitch: "The complete system. Every operational gap a small trade business has — closed, integrated, documented, and running without your daily attention. Built for businesses ready to grow past the point where the owner can hold everything in their head.",
    features: [
      { icon: Check, title: "Everything in Tiers 1 and 2", desc: "All systems above, fully configured and already running." },
      { icon: Mic, title: "Voice-to-invoice pipeline", desc: "End-of-job voice memo turns into a line-itemized invoice, customer thank-you, and follow-up reminder. Templates for your 5 most common job types." },
      { icon: Users, title: "Lead intake CRM + AI chat widget", desc: "Every website visitor captured, qualified, and followed up with — automatically, even at 11 PM on a Sunday." },
      { icon: Wrench, title: "CompanyCam rollout", desc: "All field staff onboarded. Geotagged photos. Documented usage SOP that ties directly into your social content pipeline." },
      { icon: CalendarCheck, title: "Recurring service reminder sequences", desc: "Email + text automation calibrated to your specific service cadence." },
      { icon: BookOpen, title: "Custom playbook document", desc: "A written SOP you own. Every workflow, every tool, every login — documented so you're never dependent on us." },
      { icon: Clock, title: "90 days priority support + monthly reviews", desc: "We stay engaged through the full bedding-in period." },
    ],
    forList: ["$300K+ in annual revenue", "Multi-crew operations", "Owners who treat operational systems as an investment", "Businesses preparing for growth, hiring, or eventual sale"],
    notForList: ["Sub-$300K businesses — the ROI math doesn't work yet. Start smaller."],
    price: "$8,950", priceNote: "setup + $750/mo × 3", timeline: "6–8 weeks",
    roi: "Break-even in 2–3 months. One additional job per month at a $500 ticket covers this inside year one.",
    splitPay: "$8,750 total. Optional retainer from month 4 at $500–$750/mo.",
    stripeId: "tier3",
    splitStripeId: null,
    accent: false,
  },
];

const comparisonRows = [
  { feature: "Professional email + domain", t1: true, t2: true, t3: true },
  { feature: "AI receptionist (24/7)", t1: true, t2: true, t3: true },
  { feature: "Complete Customer Review Audit", t1: true, t2: true, t3: true },
  { feature: "Review automation + escalation path", t1: false, t2: true, t3: true },
  { feature: "Google Business Profile", t1: true, t2: true, t3: true },
  { feature: "Professional Business Website (5 pages)", t1: false, t2: true, t3: true },
  { feature: "Social content pipeline", t1: false, t2: true, t3: true },
  { feature: "AI quote generation", t1: false, t2: true, t3: true },
  { feature: "Review escalation path", t1: false, t2: true, t3: true },
  { feature: "Voice-to-invoice pipeline", t1: false, t2: false, t3: true },
  { feature: "Lead CRM + AI chat", t1: false, t2: false, t3: true },
  { feature: "CompanyCam rollout", t1: false, t2: false, t3: true },
  { feature: "Service reminders", t1: false, t2: false, t3: true },
  { feature: "Custom playbook (SOP)", t1: false, t2: false, t3: true },
  { feature: "Training sessions", t1: "1×60min", t2: "2×60min", t3: "Full team" },
  { feature: "Support period", t1: "30 days", t2: "30+60 days", t3: "90 days" },
];

const timeline = [
  { day: "Day 1", title: "Audit call", desc: "We map your current systems and decide if we're a fit." },
  { day: "Day 2–3", title: "Onboarding session", desc: "We collect your scripts, services, pricing, and tool access." },
  { day: "Day 4–8", title: "Configuration", desc: "We build everything in the background. You don't lift a finger." },
  { day: "Day 9–10", title: "Live walkthrough", desc: "We train you on what you'll actually touch day-to-day." },
  { day: "Day 30", title: "Check-in call", desc: "We tune based on real-world data from the first month." },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <section className="bg-workshop-blue-dark py-16 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-6">Services</p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            Three tiers. Same outcome:
            <br /><span className="text-dirt-orange">A business that runs without you.</span>
          </h1>
          <p className="text-warm-cream/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Pick the package that matches where you are today. Every tier ends with a working system, real training, and documentation you own.
          </p>
        </div>
      </section>

      {/* Before you pick */}
      <section className="bg-warm-cream py-10 sm:py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-warm-cream-dark">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-charcoal mb-3">Not sure which tier fits? Most owners aren&apos;t.</h2>
            <p className="text-charcoal-light text-sm sm:text-base leading-relaxed mb-5">
              That&apos;s why every engagement starts with a free 20-minute audit. We&apos;ll look at your current setup, find the three biggest leaks, and tell you straight which tier (if any) makes sense. About 15% of the time we tell people they don&apos;t need us yet. We&apos;d rather lose a sale than sell you something that doesn&apos;t fit.
            </p>
            <Button asChild className="bg-dirt-orange hover:bg-dirt-orange-dark text-white font-semibold px-6 py-5 rounded-lg cursor-pointer">
              <a href="/#book">Start with the Free Audit <ArrowRight className="w-4 h-4 ml-2" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tier sections */}
      {tiers.map((tier, idx) => (
        <section key={tier.id} id={tier.id} className={`py-14 sm:py-20 ${idx % 2 === 0 ? "bg-white" : "bg-warm-cream"}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold tracking-widest text-dirt-orange">{tier.tier}</span>
              {tier.accent && <Badge className="bg-dirt-orange text-white text-xs">Most Popular</Badge>}
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-charcoal mb-2">{tier.name}</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-charcoal-light mb-5">{tier.tagline}</p>
            <p className="text-charcoal-light leading-relaxed text-sm sm:text-base mb-8 max-w-2xl">{tier.pitch}</p>

            {/* Features */}
            <h3 className="font-heading font-bold text-base sm:text-lg text-charcoal mb-5">What&apos;s included</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {tier.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-warm-cream/50 border border-warm-cream-dark/50">
                  <f.icon className="w-4 h-4 text-dirt-orange shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-charcoal text-sm">{f.title}</div>
                    <div className="text-charcoal-light text-xs sm:text-sm mt-1">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Who it's for / not for */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div>
                <h4 className="font-heading font-bold text-sm text-charcoal mb-3">Who it&apos;s for</h4>
                <ul className="space-y-2">{tier.forList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-light"><Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />{item}</li>
                ))}</ul>
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-dirt-orange mb-3">Who it&apos;s NOT for</h4>
                <ul className="space-y-2">{tier.notForList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-light"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />{item}</li>
                ))}</ul>
              </div>
            </div>

            {/* Pricing bar */}
            <div className={`rounded-xl p-5 sm:p-6 ${tier.accent ? "bg-dirt-orange/10 border border-dirt-orange/20" : "bg-charcoal/5 border border-warm-cream-dark"}`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap mb-1">
                    <span className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">{tier.price}</span>
                    <span className="text-charcoal-light text-sm">{tier.priceNote}</span>
                  </div>
                  {tier.splitPay && (
                    <div className="text-xs sm:text-sm text-charcoal-light mb-1">or {tier.splitPay}</div>
                  )}
                  <div className="text-xs sm:text-sm text-charcoal-light">Timeline: {tier.timeline}</div>
                  <div className="text-xs sm:text-sm text-charcoal-light italic mt-0.5">{tier.roi}</div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <BuyButton
                    tierId={tier.stripeId}
                    tierName={tier.name}
                    label="Get Started"
                    className="bg-dirt-orange hover:bg-dirt-orange-dark text-white font-semibold px-6 py-3 rounded-lg cursor-pointer text-sm w-full sm:w-auto transition-colors"
                  />
                  {tier.splitStripeId && (
                    <BuyButton
                      tierId={tier.splitStripeId}
                      tierName={`${tier.name} — Split Pay`}
                      label="Split Pay ($1,850 upfront)"
                      className="bg-white hover:bg-warm-cream border border-warm-cream-dark text-charcoal font-semibold px-6 py-3 rounded-lg cursor-pointer text-sm w-full sm:w-auto transition-colors"
                    />
                  )}
                  <Button asChild variant="ghost" className="text-charcoal-light hover:text-charcoal text-xs px-6 cursor-pointer w-full sm:w-auto">
                    <a href="/#book">Book audit instead <ArrowRight className="w-3 h-3 ml-1" /></a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Timeline */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal mb-2 text-center">What the first two weeks look like</h2>
          <p className="text-center text-charcoal-light text-sm mb-10">Foundation timeline — other tiers follow the same pattern, longer.</p>
          <div className="space-y-0">
            {timeline.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-dirt-orange text-white flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-warm-cream-dark min-h-[32px]" />}
                </div>
                <div className="pb-7">
                  <div className="text-xs font-bold text-dirt-orange tracking-widest">{step.day}</div>
                  <div className="font-heading font-bold text-sm sm:text-base text-charcoal">{step.title}</div>
                  <div className="text-charcoal-light text-xs sm:text-sm mt-0.5">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal-light text-sm mt-4 font-medium">You stay focused on your jobs. We handle the build.</p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-warm-cream py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal mb-8 text-center">Compare all three</h2>
          <div className="bg-white rounded-2xl border border-warm-cream-dark overflow-hidden overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-workshop-blue-dark">
                  <TableHead className="text-white font-semibold text-sm">Feature</TableHead>
                  <TableHead className="text-white font-semibold text-center text-sm">Foundation<br /><span className="text-warm-cream/50 text-xs font-normal">$895</span></TableHead>
                  <TableHead className="text-white font-semibold text-center text-sm">Growth Engine<br /><span className="text-warm-cream/50 text-xs font-normal">$2,750</span></TableHead>
                  <TableHead className="text-white font-semibold text-center text-sm">Full Ops<br /><span className="text-warm-cream/50 text-xs font-normal">$8,750</span></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonRows.map((row) => (
                  <TableRow key={row.feature} className="hover:bg-warm-cream/30">
                    <TableCell className="font-medium text-charcoal text-xs sm:text-sm">{row.feature}</TableCell>
                    {[row.t1, row.t2, row.t3].map((val, i) => (
                      <TableCell key={i} className="text-center">
                        {val === true ? <Check className="w-4 h-4 text-green-600 mx-auto" /> : val === false ? <X className="w-4 h-4 text-charcoal-light/25 mx-auto" /> : <span className="text-xs sm:text-sm text-charcoal-light">{val}</span>}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Who This Isn't For */}
      <WhoThisIsntFor />

      {/* Final CTA */}
      <section className="bg-workshop-blue-dark py-14 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">Still reading? You probably need the audit.</h2>
          <p className="text-warm-cream/70 text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Book the free 20-minute call. We&apos;ll look at your business, find the three biggest leaks, and tell you which tier (if any) actually fits. No pressure, no upsell.
          </p>
          <Button asChild size="lg" className="bg-dirt-orange hover:bg-dirt-orange-dark text-white font-semibold text-sm sm:text-base px-8 py-6 rounded-lg cursor-pointer w-full sm:w-auto">
            <a href="/#book">Book the Free Audit <ArrowRight className="w-4 h-4 ml-2" /></a>
          </Button>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-warm-cream/40 text-sm">
            <a href="mailto:corby@txtradeshop.com" className="hover:text-warm-cream/80 transition-colors flex items-center gap-1.5"><Mail className="w-4 h-4" />corby@txtradeshop.com</a>
            <span className="hidden sm:inline">·</span>
            <a href="tel:+14092813841" className="hover:text-warm-cream/80 transition-colors flex items-center gap-1.5"><Phone className="w-4 h-4" />(409) 281-3841</a>
          </div>
        </div>
      </section>
    </div>
  );
}
