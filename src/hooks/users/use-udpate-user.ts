"use client";

import { queryKeys } from "@/lib/query-keys";
import { userService } from "@/services/user.service";
import { UpdateUserDto } from "@/types/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUpdateUser(
  id: string,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: UpdateUserDto) =>
      userService.updateUser(id, dto),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.users,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.user(id),
      });

      toast.success("User updated");
    },
  });
}