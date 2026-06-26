"use client";

import { CustomPagination } from "@/components/shared/custom-pagination";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useHandlePagination } from "@/hooks/shared/use-handle-pagination";
import { useUsers } from "@/hooks/users/use-users";
import dayjs from "dayjs";
import Link from "next/link";

export default function UsersPage() {
  const { page, limit, setPage } = useHandlePagination();
  const { data, isLoading } = useUsers({ page, limit });

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
          {data.data.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {dayjs(user.createdAt).format("DD/MM/YYYY HH:mm")}
              </TableCell>
              {/* <TableCell className="text-right">
              <TableActions {...user} />
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomPagination
        totalItems={data.count}
        itemsPerPage={limit}
        setCurrentPage={setPage}
        currentPage={page}
      />
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
