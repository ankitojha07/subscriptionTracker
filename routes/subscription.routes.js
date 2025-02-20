import { Router } from "express";
import { authorize } from "../middleware/auth.middleware.js";
import {
  createSubscription,
  getAllSubscription,
  getSubscription,
} from "../controller/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.get("/", getAllSubscription);
subscriptionRouter.get("/:id", authorize, getSubscription);

export default subscriptionRouter;
