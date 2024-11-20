import BackTop from "@/components/backTop";
import BlogCards from "@/components/blogcards";
import Bloglist from "@/components/bloglist";
import Body from "@/components/body";
import Header from "@/components/header";
import { Home } from "@/components/home";
import { PopOut } from "@/components/popout";
import PopSearch from "@/components/popsearch";
import View from "@/components/view";
import React from "react";
import { Element } from "react-scroll";

const page = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <Body className="" />
      <View className="sm:hidden" />
      <Bloglist />
      <BackTop />
    </div>
  );
};

export default page;
