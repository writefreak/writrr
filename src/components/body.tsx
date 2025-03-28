"use client";
import { cn } from "@/lib/utils";
import React from "react";
import BodyText from "./bodytext";
import { Button } from "./ui/button";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";

interface Props {
  className?: string;
}

const Body = ({ className }: Props) => {
  const handleSetActive = (to: string) => {
    console.log(to);
  };
  return (
    <div className={cn("md:pt-36 p-4", className)}>
      <div className=" md:w-[1100px] mx-auto">
        <div>
          <BodyText />
        </div>
        <div className="flex items-center flex-col">
          <ScrollLink
            activeClass="active"
            to="blogprev"
            spy={true}
            smooth={true}
            offset={2000}
            duration={5000}
            onSetActive={handleSetActive}
            className="md:hidden"
          >
            <Button className="bg-lime-600 hover:bg-lime-600 flex items-center text-white rounded-full">
              View Blogs
              <ChevronDown />
            </Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Body;
