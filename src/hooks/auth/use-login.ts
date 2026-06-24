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
      console.log(data);
      setAuth(data.access_token);

      toast.success("Login successful");

      router.push("/products");
    },

    onError: (e) => {
      toast.error(e.message || "Invalid credentials");
    },
  });
}
