"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Plans from "@/lib/database/models/plans.model";

// GET PLAN BY ID
export async function getPlanById(planId: string) {
  try {
    await connectToDatabase();

    const plan = await Plans.findById(planId);

    if (!plan) throw new Error("Plan not found");

    return JSON.parse(JSON.stringify(plan));
  } catch (error) {
    handleError(error);
  }
}

// GET ALL PLANS
export async function getAllPlans({
  limit = 3,
  page = 1,
  searchQuery = "",
} = {}) {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;

    let query = {};

    if (searchQuery) {
      query = {
        name: {
          $regex: searchQuery,
          $options: "i",
        },
      };
    }

    const plans = await Plans.find(query)
      .sort({ updatedAt: -1 })
      .skip(skipAmount)
      .limit(limit);

    const totalPlans = await Plans.find(query).countDocuments();

    return {
      data: JSON.parse(JSON.stringify(plans)),
      totalPages: Math.ceil(totalPlans / limit),
    };
  } catch (error) {
    handleError(error);
  }
}
