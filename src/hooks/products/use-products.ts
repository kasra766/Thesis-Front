"use client";

import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/product.service";
import { queryKeys } from "@/lib/query-keys";
import { Pagination } from "@/types/shared";

export function useProducts(params?: Pagination) {
  return useQuery({
    queryKey: [...queryKeys.products, params],
    queryFn: () => productService.getProducts(params),
  });
}
