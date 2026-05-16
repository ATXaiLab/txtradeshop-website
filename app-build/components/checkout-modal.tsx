"use client";

import { useCallback, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { X } from "lucide-react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutModalProps {
  tierId: string;
  tierName: string;
  onClose: () => void;
}

export function CheckoutModal({ tierId, tierName, onClose }: CheckoutModalProps) {
  const fetchClientSecret = useCallback(async () => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tierId }),
    });
    const { clientSecret } = await res.json();
    return clientSecret;
  }, [tierId]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-warm-cream-dark">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-dirt-orange">Secure Checkout</p>
            <p className="font-heading font-bold text-charcoal">{tierName}</p>
          </div>
          <button
            onClick={onClose}
            className="text-charcoal-light hover:text-charcoal transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-2">
          <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </div>
    </div>
  );
}

interface BuyButtonProps {
  tierId: string;
  tierName: string;
  label?: string;
  className?: string;
}

export function BuyButton({ tierId, tierName, label = "Get Started", className = "" }: BuyButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      {open && (
        <CheckoutModal
          tierId={tierId}
          tierName={tierName}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
