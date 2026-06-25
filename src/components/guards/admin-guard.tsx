"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  isAuthenticated,
  isAdmin,
} from "@/lib/auth";

export function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/login");
      return;
    }

    if (!isAdmin()) {
      router.replace("/products");
    }
  }, [router]);

  if (!isAuthenticated()) return null;

  if (!isAdmin()) return null;

  return children;
}