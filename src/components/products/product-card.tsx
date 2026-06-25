"use client";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="h-full transition hover:shadow-md">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {product.description}
          </p>

          <p className="mt-4 font-semibold">${product.price}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
