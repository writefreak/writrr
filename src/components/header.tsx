import React from "react";
import Link from "next/link";
import { Profile } from "./profile";
import { SheetHead } from "./sheetHead";
import PopSearch from "./popsearch";
import Blog from "./blog";
import About from "./about";
import BlogCat from "./blogcat";

const Header = () => {
  return (
    <div className="dark:bg-black font-lato dark:text-white flex w-full shadow-md mx-auto justify-between p-3 fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md ">
      <div className="flex items-center flex-row">
        <p className="font-semibold sm:font-bold text-xl">The Writrr</p>
      </div>
      <div className=" items-center hidden sm:flex gap-11 select-none">
        <About />
        <Blog />
        <div className="group">
          <Link href={"#"}>Reviews</Link>
          <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
        </div>
        <BlogCat />
        <div className="group">
          <Link href={"#"}>Donations</Link>
          <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* <Find /> */}
        <PopSearch />
        <Profile />
        <SheetHead className="sm:hidden" />
      </div>
    </div>
  );
};

export default Header;
