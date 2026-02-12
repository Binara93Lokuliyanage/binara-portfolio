"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar";
import SidebarDark from "@/components/sidebar-dark";

const SidebarSwitcher = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/freelancer")) {
    return <SidebarDark />;
  }

  if (pathname.startsWith("/professional")) {
    return <Sidebar />;
  }

  return null;
};

export default SidebarSwitcher;
