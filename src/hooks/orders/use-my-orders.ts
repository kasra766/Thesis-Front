import { queryKeys } from "@/lib/query-keys";
import { orderService } from "@/services/order.service";
import { Pagination } from "@/types/shared";
import { useQuery } from "@tanstack/react-query";

export function useMyOrders(params?: Pagination) {
  return useQuery({
    queryKey: [...queryKeys.myOrders, params],
    queryFn: () => orderService.getMyOrders(params),
  });
}
