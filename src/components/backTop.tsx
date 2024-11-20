"use client";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { animateScroll } from "react-scroll";

const BackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex justify-end my-2 mx-1 right-4 fixed bottom-2 animate-bounce transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Button
        onClick={() => {
          animateScroll.scrollToTop({
            duration: 2000,
            smooth: true,
          });
        }}
        className="bg-lime-600 text-white p-1 rounded-full h-full hover:bg-black hover:sm:bg-white hover:sm:text-black hover:text-white"
      >
        <ChevronUp />
      </Button>
    </div>
  );
};

export default BackTop;
