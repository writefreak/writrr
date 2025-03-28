"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import Catpills from "./catpills";
import { Link as ScrollLink } from "react-scroll";
import BlogSearch from "./blogSearch";

const BlogHero = () => {
  const handleSetActive = (to: string) => {
    console.log(to);
  };
  return (
    <div className="">
      <div className="flex flex-col py-16 gap-4 md:gap-3 md:h-screen items-center">
        <h1 className="font-raleway md:text-6xl text-3xl py-8">
          Ignite Your Imagination <br /> With The Stories We Tell
        </h1>
        <div className="flex flex-col-reverse md:flex-col gap-4">
          <BlogSearch className="" />
          <Catpills />
        </div>
        <ScrollLink
          activeClass="active"
          to="blogprev"
          spy={true}
          smooth={true}
          offset={2000}
          duration={5000}
          onSetActive={handleSetActive}
          className="hidden md:flex"
        >
          <Button className="bg-lime-600 hover:bg-lime-600 flex items-center text-white rounded-full">
            View Blogs
            <ChevronDown />
          </Button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default BlogHero;
