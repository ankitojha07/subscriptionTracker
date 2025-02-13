import express from "express";
import userRoute from "./routes/auth.routes.js";
import client from "./model/db.js";

// import { PORT } from "./config/env.js";
const PORT = 5500;

const app = express()
app.use("/api/v1/user", userRoute)

app.get("/", (req, res) => {
    res.send("Subscription API is working fine.")
})

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 })
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        app.listen(PORT, () => {
            console.log("Server started at port ", PORT);
        })
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);

