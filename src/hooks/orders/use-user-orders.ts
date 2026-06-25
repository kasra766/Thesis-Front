import { queryKeys } from "@/lib/query-keys";
import { orderService } from "@/services/order.service";
import { useQuery } from "@tanstack/react-query";

export function useUserOrders(
  userId: string,
) {
  return useQuery({
    queryKey:
      queryKeys.userOrders(userId),

    queryFn: () =>
      orderService.getUserOrders(
        userId,
      ),

    enabled: !!userId,
  });
}