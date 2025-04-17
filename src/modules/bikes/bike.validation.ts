import { z } from "zod";

const createBikeSchema = z.object({
  body: z.object({
    brand: z.string({
      required_error: "Brand is required",
    }),
    model: z.string({
      required_error: "Model is required",
    }),
    year: z
      .number({
        required_error: "Year is required",
      })
      .int("Year must be an integer")
      .max(new Date().getFullYear(), "Year can't be in the future"),
    customerId: z.string({
      required_error: "Customer ID is required",
    }),
  }),
});
const updateBikeSchema = z.object({
  body: z.object({
    brand: z.string().optional(),
    model: z.string().optional(),
    year: z
      .number()
      .int("Year must be an integer")
      .max(new Date().getFullYear(), "Year can't be in the future")
      .optional(),
    customerId: z.string().optional(),
  }),
});

export const bikeValidation = {
  createBikeSchema,
  updateBikeSchema,
};
