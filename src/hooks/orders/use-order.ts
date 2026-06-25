"use client";

import { useQuery } from "@tanstack/react-query";
import { orderService } from "@/services/order.service";
import { queryKeys } from "@/lib/query-keys";

export function useOrder(id: string) {
  return useQuery({
    queryKey: queryKeys.order(id),
    queryFn: () => orderService.getOrder(id),

    enabled: !!id,
  });
}
