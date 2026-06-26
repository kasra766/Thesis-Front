import { AppHeader } from "@/components/layout/app-header";
import { Suspense } from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="size-full flex flex-col justify-center items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <AppHeader />
        {children}
      </Suspense>
    </div>
  );
}
