import React from "react";
import Link from "next/link";
import Find from "./search";
import { Profile } from "./profile";

const Header = () => {
  return (
    <div className="flex w-full shadow-md mx-auto justify-between p-3 fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md ">
      <div className="flex items-center flex-row">
        <p className="font-bold text-xl">The Writrr</p>
      </div>
      <div className=" items-center hidden sm:flex gap-11 select-none">
        <div className="group">
          <Link href={"#"}>About</Link>
          <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
        </div>
        <div className="group">
          <Link href={"#"}>Blogs</Link>
          <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
        </div>
        <div className="group">
          <Link href={"#"}>Reviews</Link>
          <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
        </div>
        <div className="group">
          <Link href={"#"}>Donations</Link>
          <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Find />
        <Profile />
      </div>
    </div>
  );
};

export default Header;
