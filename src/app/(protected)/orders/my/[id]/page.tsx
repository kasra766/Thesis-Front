"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMyOrder } from "@/hooks/orders/use-my-order";
import dayjs from "dayjs";
import { useParams } from "next/navigation";

export default function MyOrderPage() {
  const { id } = useParams();
  const { data, isLoading } = useMyOrder((id as string) || "");

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
      </Card>
    </div>
  );
}
