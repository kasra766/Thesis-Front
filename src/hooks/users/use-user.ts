"use client";

import { queryKeys } from "@/lib/query-keys";
import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useUser(id: string) {
  return useQuery({
    queryKey: queryKeys.user(id),
    queryFn: () =>
      userService.getUser(id),

    enabled: !!id,
  });
}