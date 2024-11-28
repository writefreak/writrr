"use client";
import React from "react";
import { Card } from "./ui/card";
import { Element } from "react-scroll";

const ResizedCat = () => {
  return (
    <Element name="categories">
      <div className="sm:pt-24 sm:px-16">
        <p className="font-raleway text-center text-2xl sm:text-5xl font-light py-10">
          Categories Reside Here
        </p>
        <div className="grid sm:grid-cols-2 gap-5 p-4 select-none">
          {category.map((c) => (
            <Card key={c.id}>
              <div className="grid grid-cols-2 p-2 gap-5">
                <img src={c.img} alt="" className="rounded-xl" />
                <div className="flex flex-col justify-center">
                  <p className="font-inter">{c.title}</p>
                  <p className="line-clamp-2 sm:line-clamp-none font-lato">
                    {c.slug}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Element>
  );
};

{
  /* <div className="grid grid-cols-2">
  <img src={c.img} alt="" />
  <div>
    <p>{c.title}</p>
    <p>{c.slug}</p>
  </div>
</div>; */
}

export default ResizedCat;

const category = [
  {
    id: 1,
    img: `/images/ai img (1).jpg`,
    title: "Technology",
    slug: "Browse our vast library of stories relating to the world of technology to gain ideas and insights",
  },
  {
    id: 2,
    img: `/images/ai img (1).jpg`,
    title: "Technology",
    slug: "Browse our vast library of stories relating to the world of technology to gain ideas and insights",
  },
  {
    id: 3,
    img: `/images/ai img (1).jpg`,
    title: "Technology",
    slug: "Browse our vast library of stories relating to the world of technology to gain ideas and insights",
  },
  {
    id: 4,
    img: `/images/ai img (1).jpg`,
    title: "Technology",
    slug: "Browse our vast library of stories relating to the world of technology to gain ideas and insights",
  },
];
