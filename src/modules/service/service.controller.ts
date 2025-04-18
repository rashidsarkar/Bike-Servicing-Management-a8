import status from "http-status";
import catchAsync from "../../shared/catchasync";
import { sendResponse } from "../../utils/sendResponse";
import { serviceRecordService } from "./service.service";

const createServiceOnDB = catchAsync(async (req, res) => {
  const result = await serviceRecordService.createService(req.body);
  const { updatedAt, createdAt, ...allDataWithoutUpdatedAt } = result;
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Service record created successfully",
    data: allDataWithoutUpdatedAt,
  });
});
const getAllServiceFromDB = catchAsync(async (req, res) => {
  const result = await serviceRecordService.getAllService();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});
const getSingleServiceFromDB = catchAsync(async (req, res) => {
  const id = req.params.idx;

  const result = await serviceRecordService.getSingleService(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});
const updateServiceStatusFromDB = catchAsync(async (req, res) => {
  const id = req.params.idx;

  const result = await serviceRecordService.updateServiceStatus(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});
const serviceStatusData = catchAsync(async (req, res) => {
  // console.log("hello");
  const result = await serviceRecordService.serviceStatusData();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

export const serviceController = {
  createServiceOnDB,
  getAllServiceFromDB,
  getSingleServiceFromDB,
  updateServiceStatusFromDB,
  serviceStatusData,
};
