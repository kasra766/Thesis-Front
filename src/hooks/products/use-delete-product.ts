"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productService } from "@/services/product.service";
import { queryKeys } from "@/lib/query-keys";
import { toast } from "sonner";

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productService.deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.products,
      });

      toast.success("Product deleted");
    },
  });
}
