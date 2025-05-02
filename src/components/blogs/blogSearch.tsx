import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  className?: string;
  search?: string;
}

const BlogSearch = ({ className, search }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function searchHandler(text: any) {
    const params = new URLSearchParams(searchParams);
    params.set("search", text.target.value);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={cn("px-6 pt-7 md:pt-0 md:pb-5 space-y-3 ", className)}>
      <h3 className="text-2xl font-raleway">Search Blogs</h3>
      <div className="md:pb-2">
        <form
          action=""
          className="border-2 border-black dark:border-lime-600 rounded-full flex items-center px-2"
        >
          <input
            value={search}
            onChange={searchHandler}
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
