"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { useCreateOrder } from "@/hooks/orders/use-create-order";
import { CreateOrderValues } from "@/schemas/order.schema";
import { OrderForm } from "../forms/order-form";
import { Product } from "@/types/product";

type IProps = Product;

export function CreateOrderModal({ id }: IProps) {
  const createOrder = useCreateOrder();
  const [open, setOpen] = useState(false);

  const onSubmit = (data: CreateOrderValues) => {
    createOrder.mutate(
      {
        ...data,
        productId: id,
      },
      {
        onSuccess: () => {
          setOpen(false);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="w-full lg:w-28">
          Create Order
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Create Order</DialogTitle>
          <DialogDescription>Create a new order</DialogDescription>
        </DialogHeader>
        <OrderForm onSubmit={onSubmit} isLoading={createOrder.isPending} />
      </DialogContent>
    </Dialog>
  );
}
