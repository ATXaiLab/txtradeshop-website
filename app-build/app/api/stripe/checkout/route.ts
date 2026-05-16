import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const tiers: Record<string, { name: string; amount: number; note?: string }> = {
  "tier1": {
    name: "Foundation Setup",
    amount: 89500, // $895.00
  },
  "tier2-full": {
    name: "Growth Engine",
    amount: 275000, // $2,750.00
  },
  "tier2-split": {
    name: "Growth Engine — Split Pay (Upfront)",
    amount: 185000, // $1,850.00
    note: "Monthly installments of $225 × 6 will be invoiced separately.",
  },
  "tier3": {
    name: "Full Operations Buildout",
    amount: 895000, // $8,950.00
    note: "Monthly installments of $750 × 3 will be invoiced separately.",
  },
};

export async function POST(req: NextRequest) {
  const { tierId } = await req.json();
  const tier = tiers[tierId];

  if (!tier) {
    return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded_page",
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: tier.name,
            description: tier.note,
          },
          unit_amount: tier.amount,
        },
        quantity: 1,
      },
    ],
    return_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
  });

  return NextResponse.json({ clientSecret: session.client_secret });
}
