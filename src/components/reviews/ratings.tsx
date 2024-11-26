import React from "react";
import { Card } from "../ui/card";

import RateStar from "./rateStar";
import RateBar from "./ratebar";
import { Star } from "lucide-react";
import CommentBox from "./commentBox";

const Ratings = () => {
  return (
    <div className="font-lato py-3">
      <p className=" font-semibold">Verified Ratings (20)</p>
      <div className="py-6 space-y-3 flex gap-3 sm:flex-col">
        <Card className="text-center flex flex-col items-center p-9 gap-2">
          <h3 className="text-2xl sm:text-3xl">3.7/5</h3>
          <RateStar />
          <p className="text-xs sm:text-sm">20 verified ratings</p>
        </Card>
        <div className="w-full space-y-2">
          {ratevalue.map((rate) => (
            <div key={rate.id} className="text-right text-sm ">
              <div className="flex gap-1 items-center">
                <p>{rate.num}</p>
                <Star className="w-3 h-3" fill="gold" strokeWidth="0" />
                <p className="text-center">{rate.count}</p>
                <div className="flex-grow">
                  {/* Render one RateBar per ratevalue item */}
                  <RateBar value={rate.value} max={rate.max} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <CommentBox className="hidden sm:flex" />
      </div>
    </div>
  );
};

export default Ratings;

const ratevalue = [
  {
    id: 1,
    num: 5,
    count: "(10)",
    value: 20,
    max: 100,
  },

  {
    id: 2,
    num: 4,
    count: "(20)",
    value: 30,
    max: 100,
  },
  {
    id: 3,
    num: 3,
    count: "(30)",
    value: 40,
    max: 100,
  },
  {
    id: 4,
    num: 2,
    count: "(40)",
    value: 50,
    max: 100,
  },
  {
    id: 5,
    num: 1,
    count: "(80)",
    value: 80,
    max: 100,
  },
];
