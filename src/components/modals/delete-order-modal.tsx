"use client";
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
import { useDeleteOrder } from "@/hooks/orders/use-delete-order";

interface IProps {
  id: string;
}

export function DeleteOrderModal({ id }: IProps) {
  const router = useRouter();
  const deleteOrder = useDeleteOrder();
  const onDelete = () => {
    deleteOrder.mutate(id, {
      onSuccess: () => {
        router.replace("/orders");
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-full">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Delete Order</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete this order?
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <Button variant="destructive" onClick={onDelete}>
            {deleteOrder.isPending ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
