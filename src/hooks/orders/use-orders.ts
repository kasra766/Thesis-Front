"use client";

import { useQuery } from "@tanstack/react-query";
import { orderService } from "@/services/order.service";
import { queryKeys } from "@/lib/query-keys";
import { Pagination } from "@/types/shared";

export function useOrders(params?:Pagination) {
  return useQuery({
    queryKey: [...queryKeys.orders, params],
    queryFn: ()=>orderService.getOrders(params),
  });
}
