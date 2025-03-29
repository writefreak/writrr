"use client";
import React from "react";
import { Avatar } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { ArrowUpRight, Dot } from "lucide-react";
import { ProfileImg } from "./profileimg";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BlogsType } from "@/lib/actions/blog";
import { format } from "date-fns";
import Image from "./image";
import HtmlText from "./html-text";

interface Props {
  blog: BlogsType[0]; // Accept a single blog object here, not an array
  className?: string;
}

const BlogCards = ({ blog, className }: Props) => {
  const formattedDate = format(blog.created, "dd-MMM-yyyy");
  return (
    <div
      className={cn("flex flex-1 p-4", className)}
      id={cn("")}
      data-aos="fade-up"
    >
      <Card key={blog.id} className="rounded-xl flex flex-col">
        {/* dynamic paging above */}

        <Image
          folderName="blogs"
          bucketName="images"
          src={blog.images[0].url}
          alt=""
          className="rounded-xl h-[250px] md:h-[170px] object-cover w-[390px] md:w-full"
        />
        <div className="p-3 space-y-1 flex flex-1 flex-col">
          <div className="flex pb-2">
            <div className="flex items-center dark:bg-lime-600/80 rounded-full px-2">
              {/* <Dot className="text-lime-600 dark:text-white" /> */}
              <p className="text-xs text-black/50 dark:text-white font-lato">
                {blog.category.name}
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full gap-2">
            <div className="">
              <Link
                href={`/blogs/${blog.id}`}
                className="flex items-center justify-between"
              >
                <h3 className="text-sm font-bold font-raleway">{blog.title}</h3>
                <ArrowUpRight className="w-6 h-6" />
              </Link>
            </div>

            <HtmlText
              text={blog.description}
              className="text-xs line-clamp-4 text-neutral-500 font-montserrat font-light"
            />

            <div className="flex flex-1 items-center gap-2 py-3">
              <ProfileImg />

              <div className="leading-6">
                <div className="flex items-center gap-1">
                  <p className="text-sm font-inter font-light">
                    {blog.user.firstName}
                  </p>
                  <p className="text-sm font-inter font-light">
                    {blog.user.lastName}
                  </p>
                </div>
                <p className="text-xs text-black/50 dark:text-white font-lato">
                  {formattedDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogCards;
