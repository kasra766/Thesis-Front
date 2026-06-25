"use client";

import { queryKeys } from "@/lib/query-keys";
import { userService } from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.deleteUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.users,
      });

      toast.success("User deleted");
    },
  });
}
