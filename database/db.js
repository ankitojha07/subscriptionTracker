import mongoose from "mongoose";

// import { configDotenv } from 'dotenv'

// configDotenv.config();

const MONGO_URI = "mongodb+srv://ankitojha07:pWgEIVSDbWyHSiCu@subscriptioncluster.9opqd.mongodb.net/subscriptionTracker?retryWrites=true&w=majority&appName=subscriptionCluster";
// const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

const client = async () => {
    try {
        await mongoose.connect(MONGO_URI, {});
        console.log("✅ MongoDB Connected!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
    }
};

export default client;