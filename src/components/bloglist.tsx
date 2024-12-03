"use client";
import React, { useState, useEffect } from "react";
import BlogCards from "./blogcards";
import { cn } from "@/lib/utils";
import { BlogsType } from "@/lib/actions/blog";

interface Blog {
  id: number;
  title: string;
  content: string;
  description: string;
  categoryId: string;
  userId: string;
  created: Date;
}

interface Props {
  id: any;
  data: BlogsType;
}

const BlogList = ({ data, id }: Props) => {
  return (
    <div id={cn("", id)} className="grid sm:grid-cols-4 font-oswald">
      {/* Map through the blogs array and pass each blog to the BlogCards component */}
      {data.map((blog) => (
        <BlogCards key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
