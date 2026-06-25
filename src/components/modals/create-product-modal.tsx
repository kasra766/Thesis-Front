"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductForm } from "../forms/product-from";
import { useCreateProduct } from "@/hooks/products/use-create-product";
import { ProductFormValues } from "@/schemas/product.schema";
import { useState } from "react";
import { Button } from "../ui/button";

export function CreateProductModal() {
  const createProduct = useCreateProduct();
  const [open, setOpen] = useState(false);

  const onSubmit = (data: ProductFormValues) => {
    createProduct.mutate(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full lg:w-3xs">
          Create Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Create Product</DialogTitle>
          <DialogDescription>Create a new product</DialogDescription>
        </DialogHeader>
        <ProductForm onSubmit={onSubmit} isLoading={createProduct.isPending} />
      </DialogContent>
    </Dialog>
  );
}
