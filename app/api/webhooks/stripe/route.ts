import { createTransaction } from "@/lib/actions/transaction.action";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export async function POST(request: Request) {
  const body = await request.text();

  const sig = request.headers.get("stripe-signature") as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook error: ${err}`);
    return NextResponse.json(
      { message: "Webhook error", error: err },
      { status: 400 }
    );
  }

  const eventType = event.type;

  if (eventType === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const transaction = {
      stripeId: session.id,
      amount: session.amount_total ? session.amount_total / 100 : 0,
      planId: session.metadata?.planId || "",
      credits: Number(session.metadata?.credits) || 0,
      buyerId: session.metadata?.buyerId || "",
      createdAt: new Date(),
    };

    try {
      const newTransaction = await createTransaction(transaction);
      return NextResponse.json({ message: "OK", transaction: newTransaction });
    } catch (error) {
      console.error(`Transaction creation error: ${error}`);
      return NextResponse.json(
        { message: "Transaction creation failed", error: error },
        { status: 500 }
      );
    }
  }

  return new Response("", { status: 200 });
}
