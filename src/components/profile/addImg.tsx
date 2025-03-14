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
          <div className="w-full flex justify-center">
            <input
              name="image"
              type="file"
              className="file:border-0 file:text-xs file:bg-blue-500 file:text-white file:cursor-pointer file:px-4 file:py-2 file:rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImg;
