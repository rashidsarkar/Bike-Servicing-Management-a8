import express from "express";
import { serviceValidation } from "./service.validation";
import { serviceController } from "./service.controller";
import validateRequest from "../../middleware/validatedRequest";

const router = express.Router();
router.get("/", serviceController.getAllServiceFromDB);
router.get("/:idx", serviceController.getSingleServiceFromDB);
router.put("/:idx/complete", serviceController.updateServiceStatusFromDB);
router.post(
  "/",
  validateRequest(serviceValidation.createServiceRecordSchema),
  serviceController.createServiceOnDB
);
export const serviceRoutes = router;
