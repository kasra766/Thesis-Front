"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { registerSchema } from "@/schema/register.schema";
import { useRegister } from "@/hooks/auth/use-register";

type FormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const register = useRegister();

  const form = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const submit = (values: FormValues) => {
    register.mutate(values);
  };

  return (
    <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
      {/* shadcn form fields */}

      <Button type="submit" disabled={register.isPending}>
        Register
      </Button>
    </form>
  );
}
