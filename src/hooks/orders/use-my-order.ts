import { queryKeys } from "@/lib/query-keys";
import { orderService } from "@/services/order.service";
import { useQuery } from "@tanstack/react-query";

export function useMyOrder(id: string) {
  return useQuery({
    queryKey: queryKeys.myOrder(id),
    queryFn: () => orderService.getMyOrder(id),

    enabled: !!id,
  });
}
