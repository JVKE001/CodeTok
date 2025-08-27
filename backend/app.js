import express from "express";
import colors from "colors";
import dotenv from "dotenv";

// Local files
import connectDB from "./db/mongodbConfig.js";
import userRoutes from "./routes/authRoutes.js";

// Load environment variable from config.env
dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", userRoutes);

// Default route (so you don't see "Cannot GET /" on browser)
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.green.bold);
});
