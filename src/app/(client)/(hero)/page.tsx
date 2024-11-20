import BlogCards from "@/components/blogcards";
import Body from "@/components/body";
import Header from "@/components/header";
import { Home } from "@/components/home";
import View from "@/components/view";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <Body className="" />
      <View />
      <BlogCards />
    </div>
  );
};

export default page;
