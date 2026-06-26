"use client";

import { DeleteUserModal } from "@/components/modals/delete-user-modal";
import { UpdateUserModal } from "@/components/modals/update-user-modal";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@/hooks/users/use-user";
import { useParams } from "next/navigation";

export default function UserPage() {
  const { id } = useParams();
  const { data, isLoading } = useUser(id as string);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>User not found</div>;
  }

  return (
    <div className="container py-8 flex flex-col gap-4 items-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>User info</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-bold">User #{data.id}</p>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Created At: {data.createdAt}</p>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <UpdateUserModal {...data} />
          <DeleteUserModal id={data.id} />
        </CardFooter>
      </Card>
    </div>
  );
}
