import Footer from "@/components/footer";
import Comments from "@/components/reviews/comments";
import Ratings from "@/components/reviews/ratings";
import ReviewTop from "@/components/reviews/reviewTop";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-5 sm:p-6">
        <ReviewTop />
        <div className="grid sm:grid-cols-[5fr,8fr] sm:gap-11 ">
          <Ratings />
          <Comments />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
