import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}
const View = ({ className }: Props) => {
  return (
    <div>
      <div className={cn("py-14", className)}>
        <p className="text-center text-2xl sm:text-5xl">
          View Recent Blogs Here
        </p>
      </div>
    </div>
  );
};

export default View;
