import "dotenv/config";
import express from "express";
import photoRoutes from "./routes/photos";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
app.use("/photos", photoRoutes);
