"use client";
import { AdminGuard } from "@/components/guards/admin-guard";
import { DeleteOrderModal } from "@/components/modals/delete-order-modal";
import { UpdateOrderModal } from "@/components/modals/update-order-modal";
import { useOrder } from "@/hooks/orders/use-order";
import { useProduct } from "@/hooks/products/use-product";
import { useParams } from "next/navigation";

export default function MyOrderPage() {
  const { id } = useParams();
  const { data, isLoading } = useOrder((id as string) || "");
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
    <AdminGuard>
      <div className="container py-8 gap-4 flex flex-col">
        <div className="flex gap-3 flex-col lg:flex-row">
          <UpdateOrderModal {...data} />
          <DeleteOrderModal id={data.id} />
        </div>

        <h1 className="text-4xl font-bold">Order #{data.id}</h1>
        <p className="mt-4">Product: {productData?.name}</p>
        <p className="mt-4">Quantity: {data.quantity}</p>
      </div>
    </AdminGuard>
  );
}
