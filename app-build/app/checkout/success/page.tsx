import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Payment Confirmed — TX Trade Shop",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-warm-cream flex items-center justify-center px-4 pt-20">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange mb-3">
          Payment Confirmed
        </p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal leading-tight mb-4">
          You&apos;re in. We&apos;ll be in touch within one business day.
        </h1>
        <p className="text-charcoal-light text-sm sm:text-base leading-relaxed mb-8">
          Corby will reach out to schedule your onboarding session and collect what&apos;s needed to get started. Check your email for a receipt.
        </p>

        <div className="bg-white rounded-2xl border border-warm-cream-dark p-6 mb-8 text-left space-y-3">
          <p className="font-semibold text-charcoal text-sm">What happens next</p>
          {[
            "Receipt and confirmation emailed to you",
            "Corby contacts you within 1 business day to schedule your onboarding session",
            "You collect: business email access, call scripts, service list, and pricing — we'll send a checklist",
            "We build everything in the background — your job is to run your business",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-dirt-orange text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                {i + 1}
              </span>
              <p className="text-charcoal-light text-sm">{step}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-charcoal-light text-sm mb-6">
          <a href="mailto:corby@txtradeshop.com" className="hover:text-charcoal transition-colors flex items-center gap-1.5">
            <Mail className="w-4 h-4" /> corby@txtradeshop.com
          </a>
          <span className="hidden sm:inline">·</span>
          <a href="tel:+14092813841" className="hover:text-charcoal transition-colors flex items-center gap-1.5">
            <Phone className="w-4 h-4" /> (409) 281-3841
          </a>
        </div>

        <Button asChild className="bg-workshop-blue hover:bg-workshop-blue-dark text-white font-semibold px-6 py-5 rounded-lg cursor-pointer">
          <Link href="/">
            Back to Home <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
