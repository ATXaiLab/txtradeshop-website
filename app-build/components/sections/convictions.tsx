const convictions = [
  {
    number: "01",
    headline: "Trade owners are not the problem. The systems are.",
    body: "The chaos a small trade business runs in isn't a character flaw or a sign the owner is \"behind on technology.\" Software has been built for venture-backed SaaS buyers, not for someone running a 4-person crew out of a Ford F-250. The fix is system design, not personal effort.",
  },
  {
    number: "02",
    headline: "Implementation is the work. Tools are the supplies.",
    body: "Every other consultant in this market is fundamentally a software reseller with consulting bolted on. We're the inverse. The work is the configuration, the integration, the documentation, the training. The tools are interchangeable.",
  },
  {
    number: "03",
    headline: "Honesty over enthusiasm. Always.",
    body: "About 15% of the audit calls we run end with us telling someone they don't need us yet — that they should fix something simpler first. We'd rather lose a sale than sell something that doesn't fit. The \"Who This Isn't For\" section on this page is part of the offer, not a disclaimer.",
  },
];

export function ConvictionsSection() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-warm-cream-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-4">
            What we believe
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal leading-tight">
            Three convictions that shape every engagement.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-warm-cream-dark border border-warm-cream-dark rounded-xl overflow-hidden">
          {convictions.map((c) => (
            <div key={c.number} className="bg-white p-7 sm:p-8">
              <div className="font-heading font-bold text-4xl text-warm-cream-dark mb-5 select-none">
                {c.number}
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-charcoal mb-3 leading-snug">
                {c.headline}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
