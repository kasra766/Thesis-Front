import { queryKeys } from "@/lib/query-keys";
import { orderService } from "@/services/order.service";
import { useQuery } from "@tanstack/react-query";

export function useMyOrders() {
  return useQuery({
    queryKey: queryKeys.myOrders,
    queryFn: orderService.getMyOrders,
  });
}