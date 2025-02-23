import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Use env
dotenv.config({path: ".env.development"});

// Initialize the app
const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json())

// Start Server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


app.get("/i-like-you", (req, res) => {
    try {
        console.log({ message: "I like you" })
        res.status(200).json({ message: "I like you" })
    } catch (error) {
        console.log({ error: error.message })
        res.status(500).json({ message: error.message })
    }
})