import React from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

const BlogHero = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 md:gap-8 h-full md:justify-center items-center">
        <h1 className="font-raleway md:text-8xl text-3xl">
          Ignite Your Imagination <br /> With The Stories We Tell
        </h1>
        <Button className="rounded-full md:flex items-center gap-2">
          View Blogs
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
};

export default BlogHero;
