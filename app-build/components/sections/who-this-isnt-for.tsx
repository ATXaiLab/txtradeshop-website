const notFor = [
  {
    label: "Sub-$150K businesses",
    detail:
      "Tier 1 might still pencil out, but probably not. Get to a steady $150K first. Come back when one recovered missed call would actually pay for the engagement.",
  },
  {
    label: "E-commerce, B2B SaaS, or non-trade businesses",
    detail:
      "Wrong vertical. We don't have the operational pattern recognition to help, and we'd be doing you a disservice pretending otherwise. The plumber understands us; the e-commerce founder shouldn't bother.",
  },
  {
    label: "Multi-state operators or franchise systems",
    detail:
      "Different problem set entirely. We're built for owner-operator and small-crew operations in Texas. If you're operating in 4 states, you need a consultant who specializes in multi-location ops, not us.",
  },
  {
    label: "Anyone looking for a marketing agency",
    detail:
      "We don't bring you leads. We make sure you don't lose the ones you already have. If you're trying to solve a top-of-funnel problem, this isn't the engagement.",
  },
  {
    label: "Anyone who wants \"AI\" for its own sake",
    detail:
      "We use AI where it genuinely solves a problem. If you want a consultant to put AI on every part of your business, you'll be disappointed by what we recommend.",
  },
];

export function WhoThisIsntFor() {
  return (
    <section className="bg-warm-cream py-16 sm:py-24 border-t border-warm-cream-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left label */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-4">
              Honest carve-out
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal leading-tight mb-4">
              Who this isn&apos;t for.
            </h2>
            <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
              About 15% of our audit calls end with us recommending the prospect not hire us. These are the most common reasons. Naming what you&apos;re not is as important as naming what you are.
            </p>
          </div>

          {/* Right list */}
          <div className="lg:col-span-2 space-y-0 divide-y divide-warm-cream-dark">
            {notFor.map((item) => (
              <div key={item.label} className="py-5 first:pt-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-dirt-orange shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-charcoal mb-1">
                      {item.label}
                    </p>
                    <p className="text-charcoal-light text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
