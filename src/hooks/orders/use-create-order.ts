"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orderService } from "@/services/order.service";
import { toast } from "sonner";
import { queryKeys } from "@/lib/query-keys";

export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: orderService.createOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.orders,
      });

      toast.success("Order created");
    },

    onError: () => {
      toast.error("Failed to create order");
    },
  });
}
