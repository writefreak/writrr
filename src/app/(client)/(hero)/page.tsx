import BackTop from "@/components/backTop";
import Bloglist from "@/components/bloglist";
import Body from "@/components/body";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ResizedCat from "@/components/resizedcat";

import View from "@/components/view";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <Body />
      <ResizedCat />
      <View className="sm:hidden font-montserrat font-light" />
      <Bloglist />
      <BackTop />
      <Footer />
    </div>
  );
};

export default page;
