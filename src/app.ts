import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import status from "http-status";
import router from "./routers";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Bike Servicing Server Start",
  });
});

app.use("/api/", router);
app.use(globalErrorHandler);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: "Route not found",
    error: {
      path: req.originalUrl,
    },
  });
});
export default app;
