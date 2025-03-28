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

const page = async () => {
  const data = await getBlogs();
  console.log("AWS Access Key:", process.env.NEXT_PUBLIC_aws_access_key);

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
