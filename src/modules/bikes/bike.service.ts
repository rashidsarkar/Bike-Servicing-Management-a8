import { Bike } from "@prisma/client";
import prisma from "../../shared/prisma";

const getAllBikes = async () => {
  const result = await prisma.bike.findMany({
    select: {
      bikeId: true,
      brand: true,
      model: true,
      year: true,
      customerId: true,
    },
  });
  return result;
};
const createBikes = async (bikeData: Bike) => {
  const result = await prisma.bike.create({
    data: bikeData,
  });
  return result;
};
export const bikeService = {
  createBikes,
  getAllBikes,
};
