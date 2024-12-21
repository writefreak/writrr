import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  className?: string;
  label: string;
  value: string;
}

const Details = ({ className, label, value }: Props) => {
  return (
    <div className={cn("", className)}>
      <div className="flex items-center gap-3">
        <div>
          <h3 className=" font-poppins text-sm">{label}</h3>
        </div>
        <div className="flex justify-end w-full">
          <div className="bg-white rounded-xl border p-2 border-lime-600 w-[16rem] md:w-[20rem]">
            <p className="text-xs font-poppins font-light">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
