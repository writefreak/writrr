import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";

const ReviewTop = () => {
  return (
    <div>
      <div className="flex justify-between py-2 font-lato">
        <h3 className="text-xl">Reviews</h3>
        <Link
          href={""}
          className="flex items-center hover:underline hover:decoration-2"
        >
          <p>See all</p>
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
      <Separator orientation="horizontal" className="bg-black h-[0.3px]" />
    </div>
  );
};

export default ReviewTop;
