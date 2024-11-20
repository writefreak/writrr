"use client";
import React from "react";

import { Link as ScrollLink } from "react-scroll";

const Blog = () => {
  const handleSetActive = (to: string) => {
    console.log(to);
  };
  return (
    <div>
      <ScrollLink
        activeClass="active"
        to="bloghead"
        spy={true}
        smooth={true}
        offset={50}
        duration={5000}
        onSetActive={handleSetActive}
      >
        <div className="group">
          Blogs
          <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
        </div>
      </ScrollLink>
    </div>
  );
};

export default Blog;
