"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileAdmin from "@/components/admin/mobileAdmin";
import Sidebar from "@/components/admin/sidebar";

const Adminlayout = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setIsAuthenticated(!!userData);
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  // Show login page normally
  if (pathname === "/login") {
    return <>{children}</>;
  }

  return (
    <div className="grid px-2 md:p-0 md:grid-cols-[17rem,auto] md:pr-10">
      <div>
        <Sidebar className="hidden md:block" />
        <div className="flex justify-end">
          <MobileAdmin className="md:hidden p-3" />
        </div>
      </div>
      <div className="flex justify-between">{children}</div>
    </div>
  );
};

export default Adminlayout;
