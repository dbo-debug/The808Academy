import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-09-30.clover",
});

type CheckoutBody = {
  priceId: string;                         // a *price_* id (not prod_)
  mode?: "payment" | "subscription";       // default "payment"
  quantity?: number;                       // default 1
  successUrl?: string;                     // optional override
  cancelUrl?: string;                      // optional override
  customerEmail?: string;
  metadata?: Record<string, string>;
};

export async function POST(req: Request) {
  let body: CheckoutBody;
  try {
    body = (await req.json()) as CheckoutBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const {
    priceId,
    mode = "payment",
    quantity = 1,
    successUrl,
    cancelUrl,
    customerEmail,
    metadata,
  } = body;

  if (!priceId) {
    return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
  }

  // Fallback to site URL if not provided
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const success = successUrl ?? `${site}/checkout/success`;
  const cancel = cancelUrl ?? `${site}/checkout/cancel`;

  try {
    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity }],
      success_url: success,
      cancel_url: cancel,
      customer_email: customerEmail,
      metadata,
      allow_promotion_codes: true,
    });

    return NextResponse.json(
      { id: session.id, url: session.url },
      { status: 200 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
