import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
  try {
    const { priceId, quantity = 1, metadata = {} } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity }],
      allow_promotion_codes: true,
      success_url: `${req.nextUrl.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/checkout/cancel`,
      metadata,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message ?? "Stripe error" }, { status: 500 });
  }
}
