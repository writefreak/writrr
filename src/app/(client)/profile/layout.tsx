"use client";
import MobileAdmin from "@/components/admin/mobileAdmin";
import Sidebar from "@/components/admin/sidebar";
import ProfileBar from "@/components/profile/profileBar";
import ProfileUserMob from "@/components/profile/profileUserMob";
import React from "react";

const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid bg-white px-2 md:p-0 md:grid-cols-[14rem,auto]">
      <div>
        <ProfileBar className="hidden md:block p-3" />
        <div className="flex justify-end">
          <ProfileUserMob className="md:hidden p-3" />
        </div>
      </div>

      {/* splitting the adminpage */}

      <div className="flex justify-between">{children}</div>
    </div>
  );
};

export default UserLayout;
//write code to check if user is an admin or not
