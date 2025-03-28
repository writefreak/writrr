import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Find = () => {
  return (
    <div>
      <Button className="flex justify-center items-center h-10 w-10 rounded-full bg-lime-600 dark:bg-black text-white">
        <Search className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Find;
