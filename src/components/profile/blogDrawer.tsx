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

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function BlogDrawer() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
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

        <div className="mt-3 md:h-[200px] md:p-6 p-4 h-[300px]">
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
