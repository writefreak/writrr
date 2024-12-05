import {
  BellDot,
  BellRing,
  BriefcaseBusiness,
  Dot,
  HandCoins,
  LayoutDashboard,
  LogOut,
  Newspaper,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const MainMenu = () => {
  return (
    <div className="space-y-5 text-sm">
      <p className="text-sm hidden md:block">Main Menu</p>
      <Link
        href={"/dashboard"}
        className="flex text-white gap-2 items-center bg-white/10 p-1.5 rounded-md"
      >
        <LayoutDashboard width={18} />
        <p className="text-sm">Dashboard</p>
      </Link>
      <Link
        href={"/user"}
        className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
      >
        <User className="text-lime-600" width={18} />
        <p>Users</p>
      </Link>
      <Link
        href={"/BlogAdmin"}
        className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
      >
        <Newspaper className="text-lime-600" width={18} />
        <p>Blogs</p>
      </Link>

      <div className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 ">
        <BellRing className="text-lime-600" width={18} />
        <Link href={"/notifications"} className="flex items-center gap-5 ">
          <p>Notifications</p>
          <div className="rounded-full bg-red-700 h-4 w-4 flex items-center justify-center">
            <span className="text-white">1</span>
          </div>
        </Link>
      </div>
      <Link
        href={"/adminLogin"}
        className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
      >
        <LogOut className="text-lime-600 " width={18} />
        <p>Logout</p>
      </Link>
    </div>
  );
};

export default MainMenu;
