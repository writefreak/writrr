import BlogBody from "@/components/blogs/blogBody";
import { getBlogs } from "@/lib/actions/blog";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await getBlogs();
  return (
    <div>
      <BlogBody data={data} />
    </div>
  );
};

export default page;
