"use client";
import React, { useEffect, useState } from "react";

const RateBar = ({ value, max }: { value: number; max: number }) => {
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setSlide(true);
  }, []);

  // Calculate the width percentage
  const widthPercentage = Math.min((value / max) * 100, 100); // Ensure it doesn't exceed 100%

  return (
    <div className="group h-3 sm:w-[28rem] w-36 bg-lime-200 rounded-full">
      <div
        className={`rounded-full relative transition-all duration-700 h-3 bg-lime-600`}
        style={{
          width: slide ? `${widthPercentage}%` : "0%",
        }}
      />
    </div>
  );
};

export default RateBar;
