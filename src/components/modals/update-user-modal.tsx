"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { useUpdateUser } from "@/hooks/users/use-udpate-user";
import { UserFormValues } from "@/schemas/user.schema";
import { UserForm } from "../forms/user-form";
import { User } from "@/types/user";

type IProps = User;

export function UpdateUserModal(props: IProps) {
  const updateUser = useUpdateUser(props.id);
  const [open, setOpen] = useState(false);

  const onSubmit = (data: UserFormValues) => {
    updateUser.mutate(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="w-full ">
          Update User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Update User</DialogTitle>
          <DialogDescription>Update user details</DialogDescription>
        </DialogHeader>
        <UserForm
          onSubmit={onSubmit}
          isLoading={updateUser.isPending}
          defaultValues={{
            name: props.name,
            email: props.email,
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
