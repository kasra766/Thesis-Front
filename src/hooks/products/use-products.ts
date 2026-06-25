"use client";

import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/product.service";
import { queryKeys } from "@/lib/query-keys";

export function useProducts() {
  return useQuery({
    queryKey: queryKeys.products,
    queryFn: productService.getProducts,
  });
}
