import { useDeleteProduct } from "@/hooks/products/use-delete-product";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface IProps {
  id: string;
}

export function DeleteProductModal({ id }: IProps) {
  const router = useRouter();
  const deleteProduct = useDeleteProduct();
  const onDelete = () => {
    deleteProduct.mutate(id, {
      onSuccess: () => {
        toast.success("Product deleted");
        router.replace("/products");
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete this product?
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <Button variant="destructive" onClick={onDelete}>
            {deleteProduct.isPending ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
