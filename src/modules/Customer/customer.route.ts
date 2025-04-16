import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});
export const customerRoutes = router;
