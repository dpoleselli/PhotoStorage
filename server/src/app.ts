import "dotenv/config";
import express from "express";
import photoRoutes from "./routes/photos";

export const app = express();

app.use(express.json());
app.use("/photos", photoRoutes);
