"use client";
import React from "react";
import { Avatar } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { ArrowUpRight, Dot } from "lucide-react";
import { ProfileImg } from "./profileimg";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  id?: any;
}

const BlogCards = ({ className, id }: Props) => {
  return (
    <div
      className={cn("grid sm:grid-cols-4 gap-5 p-4 sm:px-20", className)}
      id={cn("", id)}
    >
      {data.map((d) => (
        <Card key={d.id} className="rounded-xl ">
          <Link href={`/blogs/${d.id}`} className="">
            <img src={d.img} alt="" className="rounded-xl" />
            <div className="p-2 space-y-1">
              <div className="flex items-center">
                <Dot className="text-lime-600" />
                <p className="text-sm font-semibold text-black/50 font-lato">
                  {d.category}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-raleway">{d.title}</h3>

                <ArrowUpRight className="w-6 h-6" />
              </div>
              <p className="line-clamp-2 text-sm text-black/50 font-poppins font-light">
                {d.slug}
              </p>
              <div className="flex items-center gap-2 py-3">
                <div>{d.avatar}</div>
                <div className="leading-6">
                  <p className="text-sm font-bold">{d.name}</p>
                  <p className="text-xs text-black/50 font-lato font-semibold">
                    {d.date}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default BlogCards;

const data = [
  {
    id: 1,
    category: "Technology",
    title: "Lorem, ipsum dolor",
    name: "Heritage",
    date: "12 Nov, 2024",
    avatar: <ProfileImg />,
    img: `/images/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg`,
    slug: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore perspiciatis provident magnam ullam praesentium necessitatibus voluptate alias facere obcaecati sit.",
  },
  {
    id: 2,
    category: "Technology",
    title: "Lorem, ipsum dolor",
    name: "Heritage",
    date: "12 Nov, 2024",
    avatar: <ProfileImg />,
    img: `/images/ai img (1).jpg`,
    slug: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore perspiciatis provident magnam ullam praesentium necessitatibus voluptate alias facere obcaecati sit.",
  },
  {
    id: 3,
    category: "Technology",
    title: "Lorem, ipsum dolor",
    name: "Heritage",
    date: "12 Nov, 2024",
    avatar: <ProfileImg />,
    img: `/images/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix.jpg`,
    slug: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore perspiciatis provident magnam ullam praesentium necessitatibus voluptate alias facere obcaecati sit.",
  },
  {
    id: 4,
    category: "Technology",
    title: "Lorem, ipsum dolor",
    name: "Heritage",
    date: "12 Nov, 2024",
    avatar: <ProfileImg />,
    img: `/images/blog image.jpg`,
    slug: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore perspiciatis provident magnam ullam praesentium necessitatibus voluptate alias facere obcaecati sit.",
  },
  {
    id: 5,
    category: "Medicine",
    title: "Lorem, ipsum dolor",
    name: "Heritage",
    date: "12 Nov, 2024",
    avatar: <ProfileImg />,
    img: `/images/blog image.jpg`,
    slug: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore perspiciatis provident magnam ullam praesentium necessitatibus voluptate alias facere obcaecati sit.",
  },
  {
    id: 6,
    category: "Agriculture",
    title: "Lorem, ipsum dolor",
    name: "Heritage",
    date: "12 Nov, 2024",
    avatar: <ProfileImg />,
    img: `/images/blog image.jpg`,
    slug: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore perspiciatis provident magnam ullam praesentium necessitatibus voluptate alias facere obcaecati sit.",
  },
  {
    id: 7,
    category: "Agriculture",
    title: "Lorem, ipsum dolor",
    name: "Heritage",
    date: "12 Nov, 2024",
    avatar: <ProfileImg />,
    img: `/images/blog image.jpg`,
    slug: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore perspiciatis provident magnam ullam praesentium necessitatibus voluptate alias facere obcaecati sit.",
  },
  {
    id: 8,
    category: "Agriculture",
    title: "Lorem, ipsum dolor",
    name: "Heritage",
    date: "12 Nov, 2024",
    avatar: <ProfileImg />,
    img: `/images/blog image.jpg`,
    slug: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore perspiciatis provident magnam ullam praesentium necessitatibus voluptate alias facere obcaecati sit.",
  },
];
