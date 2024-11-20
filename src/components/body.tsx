import { cn } from "@/lib/utils";
import React from "react";
import BodyText from "./bodytext";
import { Button } from "./ui/button";

interface Props {
  className?: string;
}

const Body = ({ className }: Props) => {
  return (
    <div className={cn("sm:pt-36 p-4", className)}>
      <div className=" sm:w-[1100px] mx-auto">
        <div className="">
          <BodyText />
        </div>
      </div>
    </div>
  );
};

export default Body;
