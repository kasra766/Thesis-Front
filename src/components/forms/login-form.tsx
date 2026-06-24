"use client";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/hooks/auth/use-login";
import { loginSchema } from "@/schema/login.schema";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Field, FieldError, FieldLabel } from "../ui/field";
import Link from "next/link";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

type FormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const login = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    login.mutate(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="john@example.com"
                  type="email"
                  autoComplete="email"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id="password"
                    aria-invalid={fieldState.invalid}
                    type={showPassword ? "text" : "password"}
                    autoComplete="off"
                  />
                  <InputGroupAddon align="inline-end">
                    {showPassword ? (
                      <EyeOffIcon
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowPassword(false);
                        }}
                      />
                    ) : (
                      <EyeIcon
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowPassword(true);
                        }}
                      />
                    )}
                  </InputGroupAddon>
                </InputGroup>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button className="w-full" type="submit" disabled={login.isPending}>
            {login.isPending ? "Logging in..." : "Login"}
          </Button>
          <Link href="/register">
            <Button className="w-full" variant="ghost" type="button">
              Register
            </Button>
          </Link>
        </form>
      </CardContent>
    </Card>
  );
}
