import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  className?: string;
  description: string;
}

const DataDisplay = ({ description, className }: Props) => {
  return (
    <div className="pt-9 p-4 ">
      <div className={cn("bg-gray-100 h-56 md:h-full rounded-xl", className)}>
        <div className="text-center flex w-full h-full items-center justify-center">
          <p className="text-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DataDisplay;
