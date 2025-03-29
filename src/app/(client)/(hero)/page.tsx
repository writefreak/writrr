import { Backdrop } from "@/components/backdrop";
import BackTop from "@/components/backTop";
import Bloglist from "@/components/bloglist";
import Body from "@/components/body";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";
import ResizedCat from "@/components/resizedcat";

import View from "@/components/view";
import { getBlogs } from "@/lib/actions/blog";
import React from "react";
import { Element } from "react-scroll";

const page = async () => {
  const data = await getBlogs();

  return (
    <div>
      <div className="md:w-full dark:bg-black">
        <div className="">
          <Header />
        </div>
        <Backdrop />

        {/* <Body /> */}
        <View />
        <Bloglist id={"blogs"} data={data} />
        <ResizedCat />
        <BackTop />
        <Footer />
      </div>
    </div>
  );
};

export default page;
