import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function SheetHead() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <div className=" items-center hidden sm:flex gap-11 select-none">
          <div className="group">
            <Link href={"#"}>About</Link>
            <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
          </div>
          <div className="group">
            <Link href={"#"}>Blogs</Link>
            <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
          </div>
          <div className="group">
            <Link href={"#"}>Reviews</Link>
            <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
          </div>
          <div className="group">
            <Link href={"#"}>Donations</Link>
            <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
