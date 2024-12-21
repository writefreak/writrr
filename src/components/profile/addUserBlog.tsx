import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Card } from "../ui/card";
import { BlogDrawer } from "./blogDrawer";

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

        <BlogDrawer />
      </Card>
    </div>
  );
};

export default AddUserBlog;
