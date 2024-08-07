import { z } from "zod";

export const mortgageInfoSchema = z.object({
  amount: z
    .number({ message: "Amount is required" })
    .positive({ message: "Amount must be greater than 0" })
    .max(Infinity, { message: "Do you need infinite money or what?" }),
  endInYear: z
    .number({ message: "Term is required" })
    .positive({ message: "Term must be greater than 0" })
    .max(Infinity, {
      message: "You will already be dead by that point.. I think",
    }),
  rate: z
    .number({ message: "Rate is required" })
    .positive({ message: "Rate must be positive" })
    .max(100, { message: "Rate must be less than 100%" }),
  mortgageType: z
    .number({ message: "Type is required" })
    .min(0, { message: "Type is either 0 or 1" })
    .max(1, { message: "Type is either 0 or 1" }),
});
