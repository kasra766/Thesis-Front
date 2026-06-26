"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUsers } from "@/hooks/users/use-users";
import Link from "next/link";

export default function UsersPage() {
  const { data, isLoading } = useUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }
  return (
    <div className="container py-8">
      <Table>
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Created At</TableHead>
            {/* <TableHead className="text-right">Actions</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.createdAt}</TableCell>
              {/* <TableCell className="text-right">
              <TableActions {...user} />
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// const TableActions = ({ id }: User) => {
//   const editUser = useUpdateUser(id);
//   const deleteUser = useDeleteUser();

//   const onEdit = (data: UserFormValues) => {
//     editUser.mutate(data);
//   };

//   const onDelete = () => {
//     deleteUser.mutate(id);
//   };

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost">
//           <Dot />
//         </Button>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent>
//         <DropdownMenuGroup>
//           <DropdownMenuItem>

//           </DropdownMenuItem>
//           <DropdownMenuItem>Delete</DropdownMenuItem>
//         </DropdownMenuGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };
