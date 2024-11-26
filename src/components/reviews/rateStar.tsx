import { Star } from "lucide-react";
import React from "react";

const RateStar = () => {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-4 h-4" fill="gold" strokeWidth="0" />
      <Star className="w-4 h-4" fill="gold" strokeWidth="0" />
      <Star className="w-4 h-4" fill="gold" strokeWidth="0" />
      <Star className="w-4 h-4" fill="gold" strokeWidth="0" />
      <Star className="w-4 h-4" fill="gold" strokeWidth="0" />
    </div>
  );
};

export default RateStar;
