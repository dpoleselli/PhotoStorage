import { Router, Request, Response } from "express";
import { PhotoMetadata } from "../../../types/photo-metadata";

const router = Router();

router.get("/", (req: Request, res: Response<PhotoMetadata[]>) => {
  res.json([
    {
      id: "photo0",
    },
    {
      id: "photo1",
    },
  ]);
});

export default router;
