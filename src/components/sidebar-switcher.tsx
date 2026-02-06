"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar";
import SidebarDark from "@/components/sidebar-dark";

const SidebarSwitcher = () => {
  const pathname = usePathname();

  // 👉 Show dark sidebar on /freelancer
  if (pathname.startsWith("/freelancer")) {
    return <SidebarDark />;
  }

  // 👉 Show light sidebar on /professional
  if (pathname.startsWith("/professional")) {
    return <Sidebar />;
  }

  // 👉 Otherwise, show nothing
  return null;
};

export default SidebarSwitcher;
