"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  BookOpenText,
  HandHelping,
  Lock,
  Menu,
  Star,
  UserRoundSearch,
} from "lucide-react";
import Link from "next/link";
import About from "./about";
import { Categories } from "./categories";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  className?: string;
}

export function SheetHead({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>
            <div className="flex flex-col gap-10 select-none pt-4">
              <div className="group">
                <div className="flex items-center gap-2">
                  <UserRoundSearch />
                  <div className="group">
                    <Link href={"/about"} className="font-lato">
                      About
                    </Link>
                    <div className="group-hover:sm:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
                  </div>
                </div>
                <div className="group-hover:w-20 sm:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
              </div>
              <div className="group">
                <Link
                  href={"/blogs"}
                  className="flex items-center gap-2 font-lato"
                >
                  <BookOpenText />
                  Blogs
                </Link>
                <div className="group-hover:w-20 sm:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
              </div>
              <div className="group">
                <Link
                  href={"/reviews"}
                  className="flex items-center gap-2 font-lato"
                >
                  <Star />
                  Reviews
                </Link>
                <div className="group-hover:w-24 sm:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
              </div>

              {/* <Link href={"#"} className="flex items-center gap-2">
                  <LayoutGrid />
                  Categories
                </Link> */}
              <Categories />

              <div className="group">
                {/*Hide this section later and make it show if the user profile == my name*/}
                <Link
                  href={"/dashboard"}
                  className="flex items-center gap-2 font-lato"
                >
                  <Lock />
                  Admin Page
                </Link>
                <div className="group-hover:w-28 sm:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
              </div>
            </div>
          </SheetTitle>
        </SheetContent>
      </Sheet>
    </div>
  );
}
