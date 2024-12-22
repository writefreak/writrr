import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import React from "react";
interface Props {
  text?: string;
  className?: string;
  description?: string;
}
const AddImg = ({ text, className, description }: Props) => {
  return (
    <div className="">
      <div className={cn("pt-10 space-y-3", className)}>
        <p className="font-bold text-lg">{text}</p>
        <div className="bg-gray-100 h-[200px] flex flex-col gap-5 w-full justify-center items-center rounded-xl">
          <p>{description}</p>
          <div>
            <div className="rounded-full flex items-center justify-center h-8 w-8 p-1 border border-black">
              <Plus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImg;
