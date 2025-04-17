import express, { NextFunction, Request, Response } from "express";
import { bikeController } from "./bike.controller";
import validateRequest from "../../middleware/validatedRequest";
import { bikeValidation } from "./bike.validation";

const router = express.Router();
router.get("/", bikeController.getAllBikeFromDB);
router.get("/:idx", bikeController.getSingleBikeFromDB);
router.post(
  "/",
  validateRequest(bikeValidation.createBikeSchema),
  bikeController.createBikeOnDB
);
export const bikesRoutes = router;
