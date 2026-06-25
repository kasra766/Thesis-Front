import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2),

  description: z.string().min(5).max(255),

  price: z.number().positive(),
});

export type ProductFormValues = z.infer<typeof productSchema>;
