import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dot } from "lucide-react";
import Link from "next/link";

export function CatContent() {
  return (
    <Accordion type="single" collapsible className="w-full text-xs">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-semibold">
          Tech Trends and Innovations
        </AccordionTrigger>
        <AccordionContent>
          <Link
            href={"#"}
            className="flex items-center gap-1 font-light text-xs "
          >
            <Dot />
            Latest Technology Updates
          </Link>
        </AccordionContent>
        <AccordionContent>
          <Link
            href={"#"}
            className="flex items-center gap-1 font-light text-xs"
          >
            <Dot />
            Emerging Tech Trends
          </Link>
        </AccordionContent>
        <AccordionContent>
          <Link
            href={"#"}
            className="flex items-center gap-1 font-light text-xs"
          >
            <Dot />
            Startups and Innovations
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-left font-semibold text-xs">
          Software Development
        </AccordionTrigger>

        <AccordionContent>
          <Link
            href={"#"}
            className="flex items-center gap-1 font-light text-xs"
          >
            <Dot />
            Programming Tutorials
          </Link>
        </AccordionContent>
        <AccordionContent>
          <Link
            href={"#"}
            className="flex items-center gap-1 font-light text-xs"
          >
            <Dot />
            Online Safety Tips
          </Link>
        </AccordionContent>
        <AccordionContent>
          <Link
            href={"#"}
            className="flex items-center gap-1 font-light text-xs"
          >
            <Dot />
            Software Reviews
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-semibold text-xs">
          Gadgets and Personal Tech
        </AccordionTrigger>
        <AccordionContent>
          <Link
            href={"#"}
            className="flex items-center gap-1 font-light text-xs"
          >
            <Dot />
            Everyday Gadget Tips
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
