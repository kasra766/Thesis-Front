"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productService } from "@/services/product.service";
import { queryKeys } from "@/lib/query-keys";
import { toast } from "sonner";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productService.createProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.products,
      });

      toast.success("Product created");
    },

    onError: () => {
      toast.error("Failed to create product");
    },
  });
}