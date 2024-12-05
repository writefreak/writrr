import React from "react";
import BlogApprove from "./blogApprove";

interface Props {}

const RecentBlog = () => {
  return (
    <div className="p-4 space-y-2">
      <div className="text-xl">View Alicia's Recent Blogs Here</div>
      <BlogApprove />
    </div>
  );
};

export default RecentBlog;
