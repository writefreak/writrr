import React from "react";

const NewBlogContent = () => {
  return (
    <div>
      <div className="space-y-3">
        <h3 className="font-bold text-xl">Blog Title</h3>
        <input
          className="outline-none p-2 border border-black rounded-xl w-full"
          type="text"
          placeholder="Enter title..."
        />
      </div>
    </div>
  );
};

export default NewBlogContent;
