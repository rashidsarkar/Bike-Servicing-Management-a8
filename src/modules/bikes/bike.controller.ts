import status from "http-status";
import catchAsync from "../../shared/catchasync";
import { sendResponse } from "../../utils/sendResponse";
import { bikeService } from "./bike.service";

const createBikeOnDB = catchAsync(async (req, res) => {
  const result = await bikeService.createBikes(req.body);
  const { updatedAt, createdAt, ...allDataWithoutUpdatedAt } = result;
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Bike added successfully",
    data: allDataWithoutUpdatedAt,
  });
});
const getAllBikeFromDB = catchAsync(async (req, res) => {
  const result = await bikeService.getAllBikes();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});
const getSingleBikeFromDB = catchAsync(async (req, res) => {
  const id = req.params.idx;
  const result = await bikeService.getSingleBike(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

export const bikeController = {
  createBikeOnDB,
  getAllBikeFromDB,
  getSingleBikeFromDB,
};
