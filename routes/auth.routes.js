import { Router } from "express";
import { createUser, getAllUsers } from "../controller/user.controller.js";

const userRoute = Router();

userRoute.use((req, res, next) => {
  console.log("User Router Middleware: A request was made to /users");
  let a = 10;
  let sum = 0;
  for (let b = 0; b < a; b++) {
    sum += b;
  }
  console.log(sum);

  res.sumResult = sum;
  next();
});

userRoute.get("/", (req, res) => {
  res
    .status(200)
    .send(
      `User API is working now! Sum in the middleware is : ${res.sumResult}`
    );
});

userRoute.get("/details", (req, res) => {
  res.status(200).send("User details!");
});

userRoute.post("/register", createUser);
userRoute.get("/users", getAllUsers);

export default userRoute;
