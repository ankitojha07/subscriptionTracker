import express from "express";
import client from "./database/db.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middleware/error.middleware.js";
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/users.routes.js";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import workflowRouter from "./routes/workflow.route.js";

const PORT = 5500;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use(errorMiddleware);

app.use("/api/v1/auth/", authRoute);
app.use("/api/v1/user/", userRoute);
app.use("/api/v1/subscription/", subscriptionRouter);
app.use("/api/v1/workflows/", workflowRouter);

async function run() {
  try {
    await client();
    app.listen(PORT, () => {
      console.log("Server started at port", PORT);
    });
  } catch (error) {
    console.log("Database connection failed", error);
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Subscription API is working fine.");
});
