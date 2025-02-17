import { Router } from "express";
import { signin, signout, signup } from "../controller/auth.controller.js";

const authRoute = Router();

authRoute.get("/", (req, res) => {
  res.status(200).send(`User API is working now!`);
});

authRoute.get("/details", (req, res) => {
  res.status(200).send("User details!");
});

// path : /api/v1/user/sign-up
authRoute.post("/sign-up", signup);
authRoute.post("/sign-in", signin);
authRoute.post("/sign-out", signout);

export default authRoute;
