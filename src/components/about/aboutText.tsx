import { cn } from "@/lib/utils";
import React from "react";
import ImgDesc from "./imgdesc";
import Description from "../description";
import { Star } from "lucide-react";

interface Props {
  className?: string;
}
const AboutText = ({ className }: Props) => {
  return (
    <div className={cn("p-6 sm:p-10", className)}>
      <div className="space-y-11">
        <div className="space-y-3">
          <h3 className="text-3xl pb-2 sm:text-5xl font-raleway">About Us</h3>
          <p className="font-inter font-light">
            The Writrr is a platform for insightful, engaging, and inspiring
            content designed to spark curiosity and ignite ideas. We explore a
            wide range of topics, from creative storytelling and personal growth
            to the latest trends in technology and innovation.
          </p>
        </div>
        <ImgDesc className="sm:hidden p-0" />
        <div className="space-y-3">
          <h3 className="text-3xl pb-2 sm:text-5xl font-raleway">
            Our Mission
          </h3>
          <p className="font-inter font-light">
            We aim to create content that resonates deeply with our readers,
            sparking inspiration and offering valuable insights.
          </p>
          <p className="font-inter font-light">
            By exploring diverse topics and technological trends, we strive to
            connect with your passions and encourage meaningful conversations.
          </p>
        </div>

        <div>
          <img
            src="/images/innovation-technology-be-creative-futuristic-concept.jpg"
            alt=""
            className="rounded-xl "
          />
          <Description className="sm:hidden" />
        </div>
      </div>
    </div>
  );
};

export default AboutText;
