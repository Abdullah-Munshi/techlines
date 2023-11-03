import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectToDatabase from "./db.js";

// Routes
import productRoutes from "./routes/ProductRoutes.js";
connectToDatabase();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

// SERVER
const port = 5000;
app.listen(port, () => {
  console.log(`Server runs on port: ${port}`);
});
