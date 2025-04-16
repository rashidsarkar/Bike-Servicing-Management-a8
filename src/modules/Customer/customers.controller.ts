import status from "http-status";
import catchAsync from "../../shared/catchasync";
import { sendResponse } from "../../utils/sendResponse";
import { customerService } from "./customers.service";

const getAllCustomerFromDb = catchAsync(async (req, res) => {
  const result = await customerService.getAllCustomer();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer data fetched successfully",
    data: result,
  });
});
const createCustomerOnDB = catchAsync(async (req, res) => {
  const result = await customerService.createCustomer(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

export const customerController = {
  getAllCustomerFromDb,
  createCustomerOnDB
};
