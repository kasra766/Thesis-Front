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
import { useDeleteUser } from "@/hooks/users/use-delete-user";

interface IProps {
  id: string;
}

export function DeleteUserModal({ id }: IProps) {
  const router = useRouter();
  const deleteUser = useDeleteUser();
  const onDelete = () => {
    deleteUser.mutate(id, {
      onSuccess: () => {
        router.replace("/users");
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
          <DialogTitle>Delete User</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete this user?
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <Button variant="destructive" onClick={onDelete}>
            {deleteUser.isPending ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
