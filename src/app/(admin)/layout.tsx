"use client";
import MobileAdmin from "@/components/admin/mobileAdmin";
import Sidebar from "@/components/admin/sidebar";
import React from "react";

const Adminlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid px-2 md:p-0 md:grid-cols-[20rem,auto]">
      <div>
        <Sidebar className="hidden md:block" />
        <div className="flex justify-end">
          <MobileAdmin className="md:hidden p-3" />
        </div>
      </div>

      {/* splitting the adminpage */}

      <div className="flex justify-between">{children}</div>
    </div>
  );
};

export default Adminlayout;
//write code to check if user is an admin or not
