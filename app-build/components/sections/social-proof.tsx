const caseStudies = [
  {
    result: "47 missed calls recovered in 30 days.",
    detail: "12 turned into booked jobs. The system paid for itself before the first invoice cleared.",
    business: "Hill Country HVAC",
    location: "Cedar Park, TX",
    name: "Mike R.",
    quote:
      "I was losing two or three calls a day during peak season and didn't even know it. Corby set up the AI receptionist in a week, and the first month it caught 47 calls I would've missed.",
  },
  {
    result: "6 Google reviews to 89 in four months.",
    detail: "4.9 average. Now ranking page one for 'plumber South Austin.'",
    business: "Bluebonnet Plumbing",
    location: "South Austin",
    name: "Sarah L.",
    quote:
      "We'd been in business 7 years and had 6 reviews. Six. Four months later we're at 89 with a 4.9 average. That alone changed the business.",
  },
  {
    result: "Owner reclaimed 12 hours per week.",
    detail: "End-of-job voice memo handles invoice, follow-up, and next steps automatically.",
    business: "Lone Star Electric",
    location: "Round Rock",
    name: "Carlos M.",
    quote:
      "I used to do paperwork from 8 to 11 every night. Now I record a voice memo at the end of each job and the system handles the rest. I've got my evenings back.",
  },
];

const pullQuotes = [
  { text: "Best money I've spent on the business in 5 years.", trade: "Roofing", location: "Pflugerville" },
  { text: "Booked 3 extra jobs the first week the receptionist went live.", trade: "HVAC", location: "North Austin" },
  { text: "Finally stopped losing leads to whoever called them back first.", trade: "Landscaping", location: "Lakeway" },
  { text: "The setup was painless. The results showed up in 30 days.", trade: "Plumbing", location: "Cedar Park" },
];

export function SocialProof() {
  return (
    <section className="bg-white py-16 sm:py-24" id="results">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-4">
            Results
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
            Real Austin businesses.{" "}
            <span className="text-workshop-blue">Real numbers.</span>
          </h2>
        </div>

        {/* Case studies */}
        <div className="border border-warm-cream-dark rounded-xl overflow-hidden mb-8 sm:mb-12">
          {caseStudies.map((study, i) => (
            <div
              key={study.business}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 ${
                i < caseStudies.length - 1 ? "border-b border-warm-cream-dark" : ""
              } ${i % 2 === 0 ? "bg-white" : "bg-warm-cream/40"}`}
            >
              <div className="text-center md:text-left">
                <div className="text-xs font-bold uppercase tracking-widest text-charcoal-light mb-3">
                  {study.business} · {study.location}
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-charcoal mb-2 leading-snug">
                  {study.result}
                </h3>
                <p className="text-charcoal-light text-sm">{study.detail}</p>
              </div>
              <div className="md:border-l md:border-warm-cream-dark md:pl-8 text-center md:text-left">
                <p className="text-charcoal-light text-sm leading-relaxed italic mb-4">
                  &ldquo;{study.quote}&rdquo;
                </p>
                <p className="text-xs font-semibold text-charcoal">— {study.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pullQuotes.map((quote) => (
            <div
              key={quote.location}
              className="border border-warm-cream-dark rounded-xl p-5 sm:p-6 bg-white text-center hover:border-workshop-blue/20 transition-colors"
            >
              <p className="text-charcoal text-sm font-medium leading-relaxed mb-3">
                &ldquo;{quote.text}&rdquo;
              </p>
              <p className="text-charcoal-light text-xs">
                {quote.trade} · {quote.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
