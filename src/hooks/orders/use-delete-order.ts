"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/query-keys";
import { toast } from "sonner";
import { orderService } from "@/services/order.service";

export function useDeleteOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: orderService.deleteOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.orders,
      });

      toast.success("Order deleted");
    },
  });
}
