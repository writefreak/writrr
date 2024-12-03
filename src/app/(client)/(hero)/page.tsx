import BackTop from "@/components/backTop";
import Bloglist from "@/components/bloglist";
import Body from "@/components/body";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ResizedCat from "@/components/resizedcat";

import View from "@/components/view";
import { getBlogs } from "@/lib/actions/blog";
import React from "react";

const page = async () => {
  const data = await getBlogs();
  return (
    <div className="sm:w-full">
      <div className="">
        <Header />
      </div>

      <Body />
      <ResizedCat />
      <View className="font-montserrat  font-light" />
      <Bloglist id={"blogs"} data={data} />
      <BackTop />
      <Footer />
    </div>
  );
};

export default page;
