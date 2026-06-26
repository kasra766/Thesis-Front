import { AdminGuard } from "@/components/guards/admin-guard";
import { AppHeader } from "@/components/layout/app-header";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <div className="size-full flex flex-col justify-center items-center">
        <AppHeader />
        {children}
      </div>
    </AdminGuard>
  );
}
