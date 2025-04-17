import express from "express";
import { customerRoutes } from "../modules/Customer/customer.route";
import { bikesRoutes } from "../modules/bikes/bikes.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: customerRoutes,
  },
  {
    path: "/bikes",
    route: bikesRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
