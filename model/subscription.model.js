import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    frequency: { type: String, required: true },
    category: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, required: true },
    startDate: { type: Date, required: true },
    renewalDate: { type: Date, required: false },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;
