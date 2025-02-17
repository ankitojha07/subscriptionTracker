import { Router } from "express";
import { signin, signout, signup } from "../controller/auth.controller.js";
import { getAllUsers } from "../controller/user.controller.js";

const userRoute = Router();

userRoute.get("/", (req, res) => {
  res.status(200).send(`User API is working now!`);
});

userRoute.get("/details", (req, res) => {
  res.status(200).send("User details!");
});

// path : /api/v1/user/sign-up
userRoute.post("/sign-up", signup);
userRoute.post("/sign-in", signin);
userRoute.post("/sign-out", signout);
userRoute.get("/users", getAllUsers);

export default userRoute;
