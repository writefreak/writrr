"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import NewBlogContent from "./newBlogContent";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function BlogDrawer({ className }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild className={cn("", className)}>
        <Button
          variant={"outline"}
          className="w-[6rem] md:w-auto flex items-center bg-lime-600 text-white hover:bg-lime-600/90 hover:text-white gap-2 dark:border-white dark:hover:bg-white/30"
        >
          <Plus />
          <span className="text-xs md:text-base">New blog</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="p-4 w-full">
          <DrawerTitle className="text-center md:text-2xl">
            Create New Blog
          </DrawerTitle>
          <DrawerDescription className="text-center md:text-md">
            Please fill in the following details
          </DrawerDescription>
        </DrawerHeader>

        <div className="mt-3 md:h-[200px] md:p-6 p-4 h-[96vh]">
          {/* put whatever I'm putting here cus this height controls the drawer height */}
          <NewBlogContent />
        </div>

        <DrawerFooter className="md:flex flex-row ">
          <Button className="w-full">Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
