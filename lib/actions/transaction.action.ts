"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import Transaction from "../database/models/transaction.model";
import { updateCredits } from "./user.actions";
import { getPlanById } from "./plans.actions";

export async function checkoutCredits(transaction: {
  planId: string;
  buyerId: string;
}) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  // Fetch the plan details using planId
  const plan = await getPlanById(transaction.planId);
  if (!plan) {
    throw new Error("Plan not found");
  }

  const amount = plan.price * 100;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "eur",
          unit_amount: amount,
          product_data: {
            name: plan.name,
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      plan: plan.name,
      credits: plan.credits,
      buyerId: transaction.buyerId,
    },
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
  });

  redirect(session.url!);
}

export async function createTransaction(transaction: {
  planId: string;
  buyerId: string;
}) {
  try {
    await connectToDatabase();

    const plan = await getPlanById(transaction.planId);
    if (!plan) {
      throw new Error("Plan not found");
    }

    // Create a new transaction with a buyerId
    const newTransaction = await Transaction.create({
      ...transaction,
      credits: plan.credits,
      amount: plan.price,
      buyer: transaction.buyerId,
    });

    await updateCredits(transaction.buyerId, plan.credits);

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    handleError(error);
  }
}
