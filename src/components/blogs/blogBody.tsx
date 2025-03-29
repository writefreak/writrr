"use client";
import { BlogsType } from "@/lib/actions/blog";
import React from "react";
import BlogHero from "./blogHero";
import { Card } from "../ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Element } from "react-scroll";
import HtmlText from "../html-text";
import Image from "../image";

interface Props {
  id?: any;
  data: BlogsType;
}
const BlogBody = ({ id, data }: Props) => {
  return (
    <Element name="blogprev">
      <div className="text-center  md:h-screen">
        <BlogHero />
      </div>
      <div className="grid md:grid-cols-4 gap-3 p-4">
        {data.map((blog) => (
          <Card key={blog.id} className="rounded-xl ">
            <div className="flex flex-1 flex-col gap-2">
              <div>
                {/* <img
                  alt=""
                  src="/images/full-shot-man-experiencing-virtual-reality.jpg"
                  className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}
                <Image
                  bucketName="images"
                  src={blog.images[0]?.url}
                  className="rounded-md object-cover h-[200px]"
                  alt={blog.title}
                  scale={true}
                  // zoomIn={true}
                  folderName="blogs"
                />
              </div>

              <div className="space-y-2 p-2">
                <h2 className="text-xl md:text-base font-bold">{blog.title}</h2>
                {/* <p className="line-clamp-2 text-sm md:text-sm font-poppins font-light">
                  {blog.description}
                </p> */}

                <HtmlText
                  text={blog.description}
                  className="line-clamp-2 text-sm md:text-xs text-neutral-300 font-poppins font-light"
                />

                <Link
                  href={`/blogs/${blog.id}`}
                  className="flex items-center hover:underline decoration-1 justify-end py-2 text-lime-600"
                >
                  <p className="text-sm">Read More</p>
                  <ArrowUpRight strokeWidth={1} height={18} width={18} />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Element>
  );
};

export default BlogBody;
{
  /* <Link key={blog.id} href={`/blogs/${blog.id}`}></Link> */
}
