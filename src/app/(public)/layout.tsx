import { AppHeader } from "@/components/layout/app-header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="size-full flex flex-col justify-center items-center">
      <AppHeader />
      {children}
    </div>
  );
}
