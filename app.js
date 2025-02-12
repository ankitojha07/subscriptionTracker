import express from "express";
import userRoute from "./routes/auth.routes.js";

// import { PORT } from "./config/env.js";
const PORT = 5500;

const app = express()
app.use("/api/v1/user", userRoute)

app.get("/", (req, res) => {
    res.send("Subscription API is working fine.")
})

app.listen(PORT, () => {
    console.log("Server started at port ", PORT);
})