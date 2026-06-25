import { AdminGuard } from "@/components/guards/admin-guard";

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminGuard>{children}</AdminGuard>;
}
