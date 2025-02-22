import { workflowClient } from "../config/upstash.js";
import Subscription from "../model/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    console.log("Inside createSubscription");
    console.log("Req.user:", req.user);
    console.log("Req.user ID:", req.user._id);
    console.log("Req.body:", req.body);

    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    await workflowClient.trigger({
      url: `${SERVER_URL}`,
    });
    console.log("Subscription Created:", subscription);

    res.status(201).json({ success: "true", data: subscription });
  } catch (error) {
    next(error);
  }
};

export const getAllSubscription = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find();

    res.status(201).json({ success: "true", data: subscriptions });
  } catch (error) {
    next(error);
  }
};

export const getSubscription = async (req, res, next) => {
  try {
    const { id } = req.body;
    const subscriptions = await Subscription.findById({ id });

    res.status(201).json({ success: "true", data: subscriptions });
  } catch (error) {
    next(error);
  }
};
