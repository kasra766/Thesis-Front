"use client";

import { isAdmin, isAuthenticated, logout } from "@/lib/auth";
import { Navbar } from "../ui/navbar";
import { useRouter } from "next/navigation";

const navbarItems = {
  logo: {
    url: "/products",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Thesis Project",
  },
  menu: [
    { title: "Home", url: "/products" },
    {
      title: "Products",
      url: "/products",
    },
    {
      title: "My Orders",
      url: "/orders/my",
    },
  ],
  auth: {
    login: { title: "Login", url: "/login" },
    signup: { title: "Register", url: "/register" },
  },
};

export function AppHeader() {
  const router = useRouter();
  const isAuth = isAuthenticated();
  const isUserAdmin = isAdmin();

  const navItems = {
    ...navbarItems,
    menu: [
      ...navbarItems.menu,
      ...(isUserAdmin
        ? [
            { title: "Users", url: "/users" },
            { title: "Orders", url: "/orders" },
          ]
        : []),
    ],
  };

  const handleLogout = () => {
    logout();
    router.replace("/login");
    router.refresh();
  };

  return (
    <Navbar
      {...navItems}
      showAuth={!isAuth}
      handleLogout={handleLogout}
      className="w-full sticky top-0 z-50"
    />
  );
}
