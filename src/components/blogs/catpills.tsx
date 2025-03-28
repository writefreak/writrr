import React from "react";
import { Button } from "../ui/button";

const Catpills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:w-[37rem] md:justify-center">
      {catpill.map((cat) => (
        <Button
          className="rounded-full border-2 dark:bg-lime-600 dark:text-white hover:text-white hover:bg-black border-black text-black font-inter bg-white"
          key={cat.id}
        >
          {cat.slug}
        </Button>
      ))}
    </div>
  );
};

export default Catpills;

const catpill = [
  {
    id: 1,
    slug: "All",
  },
  {
    id: 2,
    slug: "Tech Trends & Innovation",
  },
  {
    id: 3,
    slug: "Software Development",
  },
  {
    id: 4,
    slug: "Gadgets & Personal Tech",
  },
  {
    id: 5,
    slug: "Medicine & Tech",
  },
  {
    id: 6,
    slug: "Agrotech",
  },
  {
    id: 7,
    slug: "Edutech",
  },
];
