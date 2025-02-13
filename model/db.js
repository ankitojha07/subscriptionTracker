
// import { configDotenv } from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb';

// configDotenv.config();

const MONGO_URI = "mongodb+srv://ankitojha07:DbiRftPS3N37grS4@cluster0.2wp0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

const client = new MongoClient(MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export default client;