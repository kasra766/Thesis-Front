import { z } from "zod";

export const createOrderSchema = z.object({
  quantity: z.number().int().positive(),
});

export type CreateOrderValues = z.infer<typeof createOrderSchema>;
