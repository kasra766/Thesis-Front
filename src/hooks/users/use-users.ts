"use client";

import { queryKeys } from "@/lib/query-keys";
import { userService } from "@/services/user.service";
import { Pagination } from "@/types/shared";
import { useQuery } from "@tanstack/react-query";

export function useUsers(params?: Pagination) {
  return useQuery({
    queryKey: [...queryKeys.users, params],
    queryFn: () => userService.getUsers(params),
  });
}
