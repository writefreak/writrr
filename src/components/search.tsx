import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const Find = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-lime-600 text-white">
        <Link href={"#"}>
          <Search className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Find;
