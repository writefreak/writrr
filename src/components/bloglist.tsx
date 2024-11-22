"use client";
import React from "react";
import { Element } from "react-scroll";
import BlogCards from "./blogcards";
import View from "./view";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  id?: any;
}

const Bloglist = ({ id, className }: Props) => {
  return (
    <Element id={cn("", id)} name="bloghead" className="sm:pt-1">
      <View className="hidden sm:block py-0 pb-9" />
      <BlogCards />
    </Element>
  );
};

export default Bloglist;
