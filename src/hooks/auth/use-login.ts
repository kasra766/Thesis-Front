"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { setAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: authService.login,

    onSuccess: (data) => {
      setAuth(data.accessToken);

      toast.success("Login successful");

      router.push("/products");
    },

    onError: () => {
      toast.error("Invalid credentials");
    },
  });
}
