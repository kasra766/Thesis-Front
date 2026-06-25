"use client";

import { queryKeys } from "@/lib/query-keys";
import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: userService.getUsers,
  });
}
