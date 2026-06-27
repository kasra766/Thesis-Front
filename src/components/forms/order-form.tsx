"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";

import { Button } from "../ui/button";
import { createOrderSchema, CreateOrderValues } from "@/schemas/order.schema";
import { Input } from "../ui/input";

interface IProps {
  defaultValues?: CreateOrderValues;
  onSubmit: (values: CreateOrderValues) => void;
  isLoading?: boolean;
}

export function OrderForm({ defaultValues, onSubmit, isLoading }: IProps) {
  const form = useForm<CreateOrderValues>({
    resolver: zodResolver(createOrderSchema),
    defaultValues,
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      
        <Controller
          name="quantity"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="quantity">Quantity</FieldLabel>

              <Input
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
                id="quantity"
                aria-invalid={fieldState.invalid}
                placeholder="Number of items"
                // type="number"
                autoComplete="quantity"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      

      <Button className="w-full" type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
