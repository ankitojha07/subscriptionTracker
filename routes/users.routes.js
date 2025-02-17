import { Router } from "express";
import { getUser, getUsers } from "../controller/user.controller.js";
import { authorize } from "../middleware/auth.middleware.js";

const userRoute = Router();

userRoute.get("/", getUsers);
userRoute.get("/:id", authorize, getUser);

export default userRoute;
