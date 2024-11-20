import { Button } from "@/components/ui/button";
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
  LayoutGrid,
  Menu,
  Star,
  UserRoundSearch,
} from "lucide-react";
import Link from "next/link";
import About from "./about";

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
            <div className="flex flex-col gap-10 select-none">
              <div className="group">
                <div className="flex items-center gap-2">
                  <UserRoundSearch />
                  <About />
                </div>
                <div className="group-hover:w-20 sm:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
              </div>
              <div className="group">
                <Link href={"#"} className="flex items-center gap-2">
                  <BookOpenText />
                  Blogs
                </Link>
                <div className="group-hover:w-20 sm:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
              </div>
              <div className="group">
                <Link href={"#"} className="flex items-center gap-2">
                  <Star />
                  Reviews
                </Link>
                <div className="group-hover:w-24 sm:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
              </div>
              <div className="group">
                <Link href={"#"} className="flex items-center gap-2">
                  <LayoutGrid />
                  Categories
                </Link>
                <div className="group-hover:w-32 sm:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
              </div>
              <div className="group">
                <Link href={"#"} className="flex items-center gap-2">
                  <HandHelping />
                  Donations
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
