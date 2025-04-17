import { ServiceRecord, Status } from "@prisma/client";
import prisma from "../../shared/prisma";

const createService = async (serviceData: ServiceRecord) => {
  const result = await prisma.serviceRecord.create({
    data: serviceData,
  });
  return result;
};

const getAllService = async () => {
  const result = await prisma.serviceRecord.findMany({
    select: {
      serviceId: true,
      bikeId: true,
      serviceDate: true,
      completionDate: true,
      description: true,
      status: true,
    },
  });
  return result;
};
const getSingleService = async (idx: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: idx,
    },
    select: {
      serviceId: true,
      bikeId: true,
      serviceDate: true,
      completionDate: true,
      description: true,
      status: true,
    },
  });
  return result;
};
const updateServiceStatus = async (
  idx: string,
  payload: { completionDate?: string }
) => {
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: idx,
    },
    data: {
      status: Status.done,
      completionDate: new Date(),
    },
    select: {
      serviceId: true,
      bikeId: true,
      serviceDate: true,
      completionDate: true,
      description: true,
      status: true,
    },
  });
  return result;
};

export const serviceRecordService = {
  createService,
  getAllService,
  getSingleService,
  updateServiceStatus,
};
