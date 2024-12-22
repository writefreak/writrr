import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Card } from "../ui/card";
import { BlogDrawer } from "./blogDrawer";
import { BlogDialog } from "./blogDialog";
import Link from "next/link";

const AddUserBlog = () => {
  return (
    <div className="flex flex-col pt-14 gap-7">
      <div className=" px-2 ">
        <h2 className="text-3xl font-bold">Blogs</h2>
        <p>View all your blogs here</p>
      </div>
      <Card className="w-[400px] md:w-[900px] flex items-center justify-between  rounded-md  p-5">
        <div className="space-y-2">
          <h2 className="md:text-2xl text-xl font-bold">All Blogs</h2>
          <p className="text-xs md:text-sm">Find all new and existing blogs</p>
        </div>

        <Link href={"/profile/userBlog/newBlog"} className="md:hidden">
          <Button
            variant={"outline"}
            className="w-[6rem]  md:w-auto flex items-center bg-lime-600 text-white hover:bg-lime-600/90 hover:text-white gap-2 dark:border-white dark:hover:bg-white/30"
          >
            <Plus />
            <span className="text-xs md:text-base">New blog</span>
          </Button>
        </Link>
        <BlogDialog className="hidden md:flex" />
      </Card>
    </div>
  );
};

export default AddUserBlog;
