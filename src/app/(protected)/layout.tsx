import { AuthGuard } from "@/components/guards/auth-guard";
import { AppHeader } from "@/components/layout/app-header";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="size-full flex flex-col justify-center items-center">
        <AppHeader />
        {children}
      </div>
    </AuthGuard>
  );
}
