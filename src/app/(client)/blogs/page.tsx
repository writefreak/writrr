import BlogBody from "@/components/blogs/blogBody";
import { getBlogs } from "@/lib/actions/blog";
import React from "react";

interface Props {
  searchParams: Promise<{
    search: string;
  }>;
}

const page = async ({ searchParams }: Props) => {
  const { search } = await searchParams;
  const data = await getBlogs({ search });
  return (
    <div>
      <BlogBody data={data} />
    </div>
  );
};

export default page;
