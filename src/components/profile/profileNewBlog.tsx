import React from "react";
import { Button } from "../ui/button";
import NewBlogContent from "./newBlogContent";

const ProfileNewBlog = () => {
  return (
    <form action="">
      <div className="p-4 w-full">
        <h2 className="font-bold text-2xl">Create New Blog</h2>
        <p className="">Please fill in the following details</p>
        <NewBlogContent />
        <div className="flex gap-2 py-8">
          <Button className="w-full">Submit</Button>

          <Button variant="outline" className="w-full">
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProfileNewBlog;
