import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env.development" })

const mongoDBURI = process.env.MONGODB_URI
 
// Connect to the MongoDB database
mongoose.connect(mongoDBURI);

// Event Listeners to check connection status
mongoose.connection.on('connected', () => {
    console.log("MongoDB connected successfully");
})

mongoose.connection.on('error', (err) => {
    console.error("MongoDB connection error:", err);
})

mongoose.connection.on('disconnected', () => {
    console.log("MongoDB disconnected");
})

export default mongoose;