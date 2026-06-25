"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productService } from "@/services/product.service";
import { queryKeys } from "@/lib/query-keys";
import { toast } from "sonner";
import { UpdateProductDto } from "@/types/product";

export function useUpdateProduct(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: UpdateProductDto) =>
      productService.updateProduct(id, dto),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.products,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.product(id),
      });

      toast.success("Product updated");
    },
  });
}