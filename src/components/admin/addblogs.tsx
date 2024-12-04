import React from "react";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

const AddBlogs = () => {
  return (
    <div className="flex flex-col h-screen py-14 gap-7">
      <div>
        <h2 className="text-3xl font-bold">Blogs</h2>
        <p>View all your blogs here</p>
      </div>
      <div className="w-[400px] md:w-[900px] flex items-center justify-between bg-[#030712] dark:bg-purple-700 text-white rounded-md  p-5">
        <div className="space-y-2">
          <h2 className="md:text-2xl text-xl font-bold">All Blogs</h2>
          <p className="text-xs md:text-sm">Find all new and existing blogs</p>
        </div>

        <Button
          variant={"outline"}
          className="w-[6rem] md:w-auto flex items-center bg-transparent hover:bg-white/30 hover:text-white gap-3 dark:border-white dark:hover:bg-white/30"
        >
          <Plus />
          <span className="text-xs md:text-base">New blog</span>
        </Button>
      </div>
    </div>
  );
};

export default AddBlogs;
