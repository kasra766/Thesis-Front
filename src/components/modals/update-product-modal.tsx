"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductForm } from "../forms/product-form";
import { ProductFormValues } from "@/schemas/product.schema";
import { useState } from "react";
import { Product } from "@/types/product";
import { useUpdateProduct } from "@/hooks/products/use-update-product";
import { Button } from "../ui/button";

type IProps = Product;

export function UpdateProductModal(props: IProps) {
  const updateProduct = useUpdateProduct(props.id);
  const [open, setOpen] = useState(false);

  const onSubmit = (data: ProductFormValues) => {
    updateProduct.mutate(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Update Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
        </DialogHeader>
        <ProductForm
          onSubmit={onSubmit}
          isLoading={updateProduct.isPending}
          defaultValues={{
            name: props.name,
            description: props.description,
            price: props.price,
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
