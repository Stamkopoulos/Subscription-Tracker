import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.get("/:subscriptionId", authorize, getSubscriptionById);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:subscriptionId", authorize, updateSubscription);

subscriptionRouter.delete("/:subscriptionId", authorize, deleteSubscription);

subscriptionRouter.get("/", authorize, getAllSubscriptions);

export default subscriptionRouter;
