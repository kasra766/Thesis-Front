"use client";
import { useMyOrder } from "@/hooks/orders/use-my-order";
import { useProduct } from "@/hooks/products/use-product";
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
    <div className="container py-8 gap-4 flex flex-col">
      <h1 className="text-4xl font-bold">Order #{data.id}</h1>

      <p className="mt-4">Product: {productData?.name}</p>
      <p className="mt-4">Product price: {productData?.price}</p>
      <p className="mt-4">Quantity: {data.quantity}</p>
      <p className="mt-4">Total Price: ${data.totalPrice}</p>
      <p className="mt-4">Created At: {data.createdAt}</p>
    </div>
  );
}
