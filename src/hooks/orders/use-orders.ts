"use client";

import { useQuery } from "@tanstack/react-query";
import { orderService } from "@/services/order.service";
import { queryKeys } from "@/lib/query-keys";

export function useOrders() {
  return useQuery({
    queryKey: queryKeys.orders,
    queryFn: orderService.getOrders,
  });
}
