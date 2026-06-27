"use client";

import { DeleteOrderModal } from "@/components/modals/delete-order-modal";
import { UpdateOrderModal } from "@/components/modals/update-order-modal";
import { useOrder } from "@/hooks/orders/use-order";
import { useParams } from "next/navigation";
import dayjs from "dayjs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MyOrderPage() {
  const { id } = useParams();
  const { data, isLoading } = useOrder((id as string) || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Order not found</div>;
  }

  const productPrice = data.totalPrice / data.quantity;
  
  return (
    <div className="container py-8 flex flex-col gap-4 items-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Order info</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-bold">Order #{data.id}</p>

          <p>Quantity: {data.quantity}</p>
          <p>Product Price: ${productPrice}</p>
          <p>Total Price: ${data.totalPrice}</p>
          <p>Created at: {dayjs(data.createdAt).format("DD/MM/YYYY HH:mm")}</p>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <UpdateOrderModal {...data} productPrice={productPrice} />
          <DeleteOrderModal id={data.id} />
        </CardFooter>
      </Card>
    </div>
  );
}
