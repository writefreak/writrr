import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BellRing,
  LayoutDashboard,
  LogOut,
  Newspaper,
  User,
} from "lucide-react";
import Link from "next/link";
interface Props {
  className?: string;
}

const MobileAdmin = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <Sheet>
        <SheetTrigger className="" asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>
            {/* <MainMenu /> */}
            <div className="space-y-5 text-sm">
              <p className="text-sm hidden md:block">Main Menu</p>
              <Link
                href={"/dashboard"}
                className="flex  hover:bg-lime-600/20 gap-4 items-center bg-white/10 p-1.5 rounded-md"
              >
                <LayoutDashboard width={18} className="text-lime-600" />
                <p className="text-sm">Dashboard</p>
              </Link>
              <Link
                href={"/"}
                className="flex hover:bg-lime-600/20 items-center rounded-md p-1.5 gap-4 "
              >
                <User className="text-lime-600" width={18} />
                <p>Users</p>
              </Link>
              <Link
                href={"/BlogAdmin"}
                className="flex items-center rounded-md p-1.5 gap-4 hover:bg-lime-600/20 "
              >
                <Newspaper className="text-lime-600" width={18} />
                <p>Blogs</p>
              </Link>

              <div className="flex items-center rounded-md p-1.5 gap-4 hover:bg-lime-600/20 ">
                <BellRing className="text-lime-600" width={18} />
                <Link
                  href={"/notifications"}
                  className="flex items-center gap-5 "
                >
                  <p className="">Notifications</p>
                  <div className="rounded-full bg-red-700 h-4 w-4 flex items-center justify-center">
                    <span className="text-white">1</span>
                  </div>
                </Link>
              </div>
              <Link
                href={"/adminLogin"}
                className="flex items-center rounded-md p-1.5 gap-4 hover:bg-lime-600/20"
              >
                <LogOut className="text-lime-600 " width={18} />
                <p>Logout</p>
              </Link>
            </div>
          </SheetTitle>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileAdmin;
