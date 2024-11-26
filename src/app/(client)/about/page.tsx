import AboutText from "@/components/about/aboutText";
import ImgDesc from "@/components/about/imgdesc";
import Footer from "@/components/footer";
import ProgressBar from "@/components/progressBar";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 pt-6">
        <AboutText />
        <ImgDesc className="hidden sm:block" />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
