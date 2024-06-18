import { Document, Schema, model, models } from "mongoose";

export interface IInclusions extends Document {
  label: string;
  isIncluded: boolean;
}

export interface PPlans extends Document {
  name: string;
  icon: string;
  price: number;
  credits: number;
  inclusions: [IInclusions];
}

const InclusionSchema = new Schema({
  label: { type: String, required: true },
  isIncluded: { type: Boolean, required: true },
});

const PlansSchema = new Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  price: { type: Number, required: true },
  credits: { type: Number, required: true },
  inclusions: {
    type: [InclusionSchema],
    default: [],
  },
});

const Plans = models?.Plans || model("Plans", PlansSchema);

export default Plans;
