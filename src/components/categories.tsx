import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import { CatContent } from "./catcontent";

export function Categories() {
  return (
    <Accordion type="single" collapsible className="w-full font-lato">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="group">
            <Link href={"#"} className="flex items-center gap-2">
              <LayoutGrid />
              <p className="font-semibold"> Categories</p>
            </Link>
            <div className="group-hover:w-32 sm:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CatContent />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
