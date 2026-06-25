"use client";

import { DeleteProductModal } from "@/components/modals/delete-product-modal";
import { UpdateProductModal } from "@/components/modals/update-product-modal";
import { useProduct } from "@/hooks/products/use-product";
import { isAdmin } from "@/lib/auth";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const { data, isPending, isError } = useProduct(params.id as string);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container py-8 gap-4 flex flex-col">
      {isAdmin() && (
        <div className="flex gap-3 flex-col lg:flex-row">
          <UpdateProductModal {...data} />
          <DeleteProductModal id={data.id} />
        </div>
      )}
      <h1 className="text-4xl font-bold">{data.name}</h1>

      <p className="mt-4">{data.description}</p>

      <p className="mt-6 text-2xl font-semibold">${data.price}</p>
    </div>
  );
}
