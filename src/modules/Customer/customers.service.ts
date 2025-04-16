import { Customer } from "../../generated/prisma";
import prisma from "../../shared/prisma";

const getAllCustomer = async () => {
  const res = await prisma.customer.findMany();
  return res;
};
const createCustomer = async (customerData: Customer) => {
  const result = await prisma.customer.create({
    data: customerData,
  });
  return result;
};
export const customerService = {
  getAllCustomer,
  createCustomer,
};
