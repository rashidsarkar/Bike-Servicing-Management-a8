import express from "express";
import { customerRoutes } from "../modules/Customer/customer.route";
import { bikesRoutes } from "../modules/bikes/bikes.route";
import { serviceRoutes } from "../modules/service/service.route";

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
  {
    path: "/services",
    route: serviceRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
