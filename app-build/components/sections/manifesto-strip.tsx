export function ManifestoStrip() {
  return (
    <section className="bg-warm-cream py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-6">
          What we actually do
        </p>
        <blockquote className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-charcoal leading-tight tracking-tight">
          &ldquo;We don&apos;t sell AI. We sell{" "}
          <span className="text-workshop-blue">finished systems</span>{" "}
          — built around AI, around your existing tools, and around the way your
          business actually runs.&rdquo;
        </blockquote>
        <div className="mt-8 pt-8 border-t border-warm-cream-dark flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-charcoal-light text-sm sm:text-base max-w-lg text-center">
            Most consultants stop at activation. We start at activation and end at{" "}
            <span className="font-semibold text-charcoal">adoption</span> — documented, trained, and running without us.
          </p>
          <a
            href="#services"
            className="shrink-0 text-sm font-semibold text-workshop-blue hover:text-dirt-orange transition-colors underline underline-offset-4"
          >
            See what&apos;s included →
          </a>
        </div>
      </div>
    </section>
  );
}
