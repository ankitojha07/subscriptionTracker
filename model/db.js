import mongoose from "mongoose";

// import { configDotenv } from 'dotenv'

// configDotenv.config();

const MONGO_URI = "mongodb+srv://ankitojha07:DbiRftPS3N37grS4@cluster0.2wp0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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