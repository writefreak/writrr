import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

const BlogSearch = ({ className }: Props) => {
  return (
    <div className={cn("px-6 pt-7 md:pt-0 md:pb-5 space-y-3", className)}>
      <h3 className="text-2xl font-raleway">Search Blogs</h3>
      <div className="md:pb-2">
        <form
          action=""
          className="border-2 border-black rounded-full flex items-center px-2"
        >
          <input
            type="text"
            placeholder="Search blogs.."
            className="outline-none w-full p-3 bg-transparent"
          />

          <Button className="h-10 bg-lime-600 w-10 rounded-full">
            <Search />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BlogSearch;
