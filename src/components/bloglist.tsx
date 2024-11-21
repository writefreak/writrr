"use client";
import React from "react";
import { Element } from "react-scroll";
import BlogCards from "./blogcards";
import View from "./view";

const Bloglist = () => {
  return (
    <Element name="bloghead" className="sm:pt-1">
      <View className="hidden sm:block py-0 pb-9" />
      <BlogCards />
    </Element>
  );
};

export default Bloglist;
