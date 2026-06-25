"use client";

import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/product.service";
import { queryKeys } from "@/lib/query-keys";

export function useProduct(id: string) {
  return useQuery({
    queryKey: queryKeys.product(id),
    queryFn: () => productService.getProduct(id),

    enabled: !!id,
  });
}
