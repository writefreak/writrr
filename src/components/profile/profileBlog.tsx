import React from "react";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import AddUserBlog from "./addUserBlog";
import DataDisplay from "./dataDisplay";
import { BlogDrawer } from "./blogDrawer";

const ProfileBlog = () => {
  return (
    <div>
      <AddUserBlog />
      <DataDisplay description="No Blogs Here" className="md:h-72 md:pb-4" />
      {/* <BlogDrawer /> */}
    </div>
  );
};

export default ProfileBlog;
