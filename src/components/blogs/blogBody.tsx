import { BlogsType } from "@/lib/actions/blog";
import Link from "next/link";
import React from "react";
import Picture from "../ui/image";
import BlogHero from "./blogHero";

interface Props {
  id?: any;
  data: BlogsType;
}
const BlogBody = ({ id, data }: Props) => {
  return (
    <div>
      <div className="md:w-full text-center h-screen">
        <BlogHero />
      </div>
      <div className="">
        {data.map((blog) => (
          <div key={blog.id} className=""></div>
        ))}
      </div>
    </div>
  );
};

export default BlogBody;
{
  /* <Link key={blog.id} href={`/blogs/${blog.id}`}></Link> */
}
