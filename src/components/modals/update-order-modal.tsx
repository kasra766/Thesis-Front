"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { CreateOrderValues } from "@/schemas/order.schema";
import { OrderForm } from "../forms/order-form";
import { useUpdateOrder } from "@/hooks/orders/use-update-order";
import { Order } from "@/types/order";

type IProps = Order & { productPrice: number };

export function UpdateOrderModal({ id, quantity, productPrice }: IProps) {
  const updateOrder = useUpdateOrder(id);
  const [open, setOpen] = useState(false);

  const onSubmit = (data: CreateOrderValues) => {
    const dto = {
      quantity: data.quantity,
      totalPrice: data.quantity * productPrice,
    };
    updateOrder.mutate(dto, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="w-full ">
          Update Order
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Update Order</DialogTitle>
        </DialogHeader>
        <OrderForm
          onSubmit={onSubmit}
          isLoading={updateOrder.isPending}
          defaultValues={{ quantity }}
        />
      </DialogContent>
    </Dialog>
  );
}
