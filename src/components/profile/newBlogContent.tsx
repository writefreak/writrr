import React from "react";
import AddImg from "./addImg";
import { ProfileCateg } from "./profileCateg";
import ProfblogContent from "./profblogContent";

const NewBlogContent = () => {
  return (
    <div>
      <div className="space-y-3">
        <div className="pt-10 space-y-3">
          <h3 className="font-bold text-xl md:text-lg ">Blog Title</h3>
          <input
            className="outline-none p-2 border border-black rounded-xl w-[85vw]"
            type="text"
            placeholder="Enter title..."
          />
        </div>

        <AddImg text="Featured Image" description="Add New Image" />
        <ProfileCateg />
        <ProfblogContent />
      </div>
    </div>
  );
};

export default NewBlogContent;
