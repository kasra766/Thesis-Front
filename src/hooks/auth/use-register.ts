"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationFn: authService.register,

    onSuccess: () => {
      toast.success("Account created");

      router.push("/login");
    },

    onError: () => {
      toast.error("Registration failed");
    },
  });
}