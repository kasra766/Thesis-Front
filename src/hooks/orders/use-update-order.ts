"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orderService } from "@/services/order.service";
import { queryKeys } from "@/lib/query-keys";
import { toast } from "sonner";

export function useUpdateOrder(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { quantity: number; totalPrice: number }) =>
      orderService.updateOrder(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.order(id),
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.orders,
      });

      toast.success("Order updated");
    },

    onError: () => {
      toast.error("Failed to update order");
    },
  });
}
