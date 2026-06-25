"use client";

import { useProducts } from "@/hooks/products/use-products";
import { ProductCard } from "@/components/products/product-card";
import { isAdmin } from "@/lib/auth";
import { CreateProductModal } from "@/components/modals/create-product-modal";

export default function ProductsPage() {
  const { data, isPending, isError } = useProducts();

  if (isPending) {
    return <div className="container py-8">Loading...</div>;
  }

  if (isError) {
    return <div className="container py-8">Failed to load products.</div>;
  }

  return (
    <div className="container py-8 flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <h1 className="mb-6 text-3xl font-bold">Products</h1>
        {isAdmin() && <CreateProductModal />}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
