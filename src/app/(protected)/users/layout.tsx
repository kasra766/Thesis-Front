import { AdminGuard } from "@/components/guards/admin-guard";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminGuard>{children}</AdminGuard>;
}
