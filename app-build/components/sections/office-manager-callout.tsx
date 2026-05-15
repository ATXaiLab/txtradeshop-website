import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function OfficeManagerCallout() {
  return (
    <section className="bg-warm-cream py-16 sm:py-24 border-t border-warm-cream-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-6">
          Not the owner? Read this.
        </p>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-charcoal leading-tight mb-6">
          Are you the one running the office while your partner runs the field?
        </h2>
        <div className="space-y-4 text-charcoal-light text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          <p>
            Most of our audit calls actually start with the bookkeeper, the office manager, or the spouse — the person living with the chaos every day. The missed calls, the lost paperwork, the reviews nobody asks for, the software that doesn&apos;t talk to itself.
          </p>
          <p className="font-medium text-charcoal">
            You don&apos;t need permission to fix something that&apos;s making your life harder.
          </p>
        </div>
        <Button
          asChild
          className="bg-workshop-blue hover:bg-workshop-blue-dark text-white font-semibold px-6 py-5 rounded-lg transition-colors cursor-pointer"
        >
          <a href="#book">
            Book the Audit
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
}
