"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMyOrder } from "@/hooks/orders/use-my-order";
import { useProduct } from "@/hooks/products/use-product";
import dayjs from "dayjs";
import { useParams } from "next/navigation";

export default function MyOrderPage() {
  const { id } = useParams();
  const { data, isLoading } = useMyOrder((id as string) || "");
  const { data: productData, isLoading: isLoadingProduct } = useProduct(
    data?.productId || "",
  );

  const loading = isLoading || isLoadingProduct;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Order not found</div>;
  }

  return (
    <div className="container py-8 flex flex-col gap-4 items-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Order info</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-bold">Order #{data.id}</p>
          <p>Product: {productData?.name}</p>
          <p>Quantity: {data.quantity}</p>
          <p>Product Price: ${productData?.price}</p>
          <p>Total Price: ${data.totalPrice}</p>
          <p>Created at: {dayjs(data.createdAt).format("DD/MM/YYYY HH:mm")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
