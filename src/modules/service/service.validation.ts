import { z } from "zod";

// Enum for status values
const StatusEnum = z.enum(["pending", "in_progress", "done"]);

// Create Schema
const createServiceRecordSchema = z.object({
  body: z.object({
    bikeId: z.string({
      required_error: "Bike ID is required",
    }),
    serviceDate: z
      .string({
        required_error: "Service date is required",
      })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid service date format",
      }),
    completionDate: z
      .string({
        required_error: "Completion date is required",
      })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid completion date format",
      })
      .optional(),
    description: z.string({
      required_error: "Description is required",
    }),
    status: StatusEnum,
  }),
});

// Update Schema — all fields optional
const updateServiceRecordSchema = z.object({
  body: z.object({
    bikeId: z.string().optional(),
    serviceDate: z
      .string()
      .refine((val) => !val || !isNaN(Date.parse(val)), {
        message: "Invalid service date format",
      })
      .optional(),
    completionDate: z
      .string()
      .refine((val) => !val || !isNaN(Date.parse(val)), {
        message: "Invalid completion date format",
      })
      .optional(),
    description: z.string().optional(),
    status: StatusEnum.optional(),
  }),
});
const updateServiceStatusSchema = z.object({
  body: z.object({
    completionDate: z
      .string()
      .optional()
      .refine((val) => !val || !isNaN(Date.parse(val)), {
        message: "Invalid completion date format",
      }),
  }),
});

export const serviceValidation = {
  createServiceRecordSchema,
  updateServiceRecordSchema,
  updateServiceStatusSchema,
};
