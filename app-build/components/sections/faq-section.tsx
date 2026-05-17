"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "I'm not technical. Will this actually work for me?",
    a: "That's most of our clients. If you can use a smartphone, you can use what we set up. The whole point of bringing us in is so you don't have to learn the tools — we configure them, train you on the parts you actually touch, and document the rest. If you'd rather not look at a dashboard ever again, that's a feature, not a problem.",
  },
  {
    q: "How is this different from hiring a marketing agency?",
    a: "Marketing agencies bring you leads. We make sure you don't lose the ones you already have. Most trade businesses are leaking 30–40% of their inbound calls and never asking for a review — fixing that is worth more than any ad campaign. We're operations, not marketing. (Though once your operations are tight, we can connect you with marketing folks who'll actually have something to work with.)",
  },
  {
    q: "I'm already paying for Jobber, CompanyCam, QuickBooks, a dispatch app… am I just adding another bill?",
    a: "Fair concern, and a common one. Most trade businesses we audit are already spending $300–$450/month on a stack of tools that don't talk to each other. That's not the problem we're adding to — that's the problem we're solving. Part of every engagement is making your existing tools work together so they earn the money they cost you. In some cases we recommend canceling tools you're paying for and not using. The point isn't more software. It's a working system.",
  },
  {
    q: "What if the AI receptionist mishandles a call?",
    a: "Two safeguards. First, every call gets transcribed and texted to you in real time, so you see what was said and can step in if needed. Second, we configure it with your scripts, your services, and your boundaries — the AI doesn't go off-script. In the rare cases it can't handle something, it routes the caller to your cell. We tune it for the first 30 days based on real call recordings, so by month two it's handling your business the way you would.",
  },
  {
    q: "I already have Jobber / Housecall Pro / ServiceTitan. Does this replace that?",
    a: "No. We work alongside whatever job-management software you already use. Most clients keep their existing platform and we plug AI into the gaps — call answering, review generation, social content, follow-up. If your platform is doing its job, we leave it alone.",
  },
  {
    q: "What's the actual ROI? When do I break even?",
    a: "For Foundation ($895), most clients break even within 30 days — usually on a single recovered missed call that turned into a booked job. For Full Operations ($8,950 total), break-even typically happens in months 2–3, driven by recovered calls plus repeat customer reactivation. We'll run the math on your specific business during the audit call.",
  },
  {
    q: "What happens after the setup is done?",
    a: "Foundation includes a 30-day check-in. Growth Engine includes 30 days of email/Slack support and a 60-day check-in. Full Operations includes 90 days of priority support and monthly optimization for 3 months. After that, you own the system — we hand you a written playbook so you're not dependent on us. About half our Full Operations clients keep us on a small monthly retainer ($500–$750/mo) for ongoing tuning, but it's optional.",
  },
  {
    q: "Do you work with trades outside Austin?",
    a: "We're based in Austin and most of our work is in Central Texas — Round Rock, Cedar Park, Pflugerville, Buda, Kyle, Georgetown, Lakeway, Dripping Springs. We can work with trade businesses anywhere in Texas remotely, but the local hands-on relationships are where we do our best work.",
  },
  {
    q: "What if it doesn't work for my business?",
    a: "If we finish a Foundation setup and you're not satisfied within the first 30 days, we'll refund the engagement and remove what we installed. We've never had to do it, but the offer is real. Trade owners have been burned by software vendors before — we're not going to be another one.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-warm-cream py-16 sm:py-24 border-t border-warm-cream-dark" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-4">FAQ</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal leading-tight">
            Common questions.
          </h2>
          <p className="text-charcoal-light text-sm sm:text-base mt-3">
            Honest answers to what trade owners actually ask on every audit call.
          </p>
        </div>

        {/* Accordion */}
        <Accordion className="divide-y divide-warm-cream-dark">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} className="border-none">
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-charcoal hover:text-workshop-blue py-5 transition-colors cursor-pointer [&:hover]:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-charcoal-light text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
