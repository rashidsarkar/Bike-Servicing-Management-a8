"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchasync_1 = __importDefault(require("../../shared/catchasync"));
const sendResponse_1 = require("../../utils/sendResponse");
const service_service_1 = require("./service.service");
const createServiceOnDB = (0, catchasync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceRecordService.createService(req.body);
    const { updatedAt, createdAt } = result, allDataWithoutUpdatedAt = __rest(result, ["updatedAt", "createdAt"]);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Service record created successfully",
        data: allDataWithoutUpdatedAt,
    });
}));
const getAllServiceFromDB = (0, catchasync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceRecordService.getAllService();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service records fetched successfully",
        data: result,
    });
}));
const getSingleServiceFromDB = (0, catchasync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.idx;
    const result = yield service_service_1.serviceRecordService.getSingleService(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service records fetched successfully",
        data: result,
    });
}));
const updateServiceStatusFromDB = (0, catchasync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.idx;
    const result = yield service_service_1.serviceRecordService.updateServiceStatus(id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service marked as completed",
        data: result,
    });
}));
const serviceStatusData = (0, catchasync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("hello");
    const result = yield service_service_1.serviceRecordService.serviceStatusData();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result,
    });
}));
exports.serviceController = {
    createServiceOnDB,
    getAllServiceFromDB,
    getSingleServiceFromDB,
    updateServiceStatusFromDB,
    serviceStatusData,
};
