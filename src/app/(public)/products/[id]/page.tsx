"use client";

import { CreateOrderModal } from "@/components/modals/create-order-modal";
import { DeleteProductModal } from "@/components/modals/delete-product-modal";
import { UpdateProductModal } from "@/components/modals/update-product-modal";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProduct } from "@/hooks/products/use-product";
import { isAdmin, isAuthenticated } from "@/lib/auth";
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
    <div className="container py-8 flex flex-col gap-4 items-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Product info</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-4xl font-bold">{data.name}</h1>

          <p className="mt-4">{data.description}</p>

          <p className="mt-6 text-2xl font-semibold">${data.price}</p>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          {isAuthenticated() && <CreateOrderModal {...data} />}
          {isAdmin() && (
            <>
              <UpdateProductModal {...data} />
              <DeleteProductModal id={data.id} />
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
