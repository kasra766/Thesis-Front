"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/hooks/auth/use-login";
import { loginSchema } from "@/schema/login.schema";
import { Button } from "../ui/button";

type FormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const login = useLogin();

  const form = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = (values: FormValues) => {
    login.mutate(values);
  };

  return (
    <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
      {/* shadcn form fields */}

      <Button type="submit" disabled={login.isPending}>
        Login
      </Button>
    </form>
  );
}
