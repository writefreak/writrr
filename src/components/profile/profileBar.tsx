import React from "react";
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
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}

const ProfileBar = ({ className }: Props) => {
  return (
    <div className="bg-lime-600 md:h-screen fixed z-50 ">
      <div className={cn("space-y-5 text-sm text-white", className)}>
        <p className="text-xl hidden md:block px-3">Welcome!</p>
        <Link
          href={"/profile/profileDashboard"}
          className="flex text-white gap-2 items-center bg-white/10 p-1.5 rounded-md"
        >
          <LayoutDashboard width={18} />
          <p className="text-sm">Dashboard</p>
        </Link>
        <Link
          href={"/profile/profileDesc"}
          className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
        >
          <User className="text-white" width={18} />
          <p>Profile</p>
        </Link>
        <Link
          href={"/profile/userBlog"}
          className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
        >
          <Newspaper className="text-white" width={18} />
          <p>Blogs</p>
        </Link>

        <div className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 ">
          <BellRing className="text-white" width={18} />
          <Link
            href={"/profile/profileNotify"}
            className="flex items-center gap-5"
          >
            <p>Notifications</p>
            <div className="rounded-full bg-red-700 h-4 w-4 flex items-center justify-center">
              <span className="text-white">1</span>
            </div>
          </Link>
        </div>
        <Link
          href={"/login"}
          className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
        >
          <LogOut className="text-white" width={18} />
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};
export default ProfileBar;
