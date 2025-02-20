import { Router } from "express";
import { authorize } from "../middleware/auth.middleware.js";
import { createSubscription } from "../controller/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get All subscriptions." })
);

subscriptionRouter.get("/:", (req, res) =>
  res.send({ title: "Get subscription details." })
);

subscriptionRouter.post("/", authorize, createSubscription);

export default subscriptionRouter;
