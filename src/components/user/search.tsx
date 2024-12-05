import { Filter, Plus, Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <div className="flex items-center border p-1 gap-2 border-black rounded-md">
          <Search />
          <input
            type="text"
            className="bg-transparent outline-none"
            placeholder="search..."
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        {btnData.map((b) => (
          <Button key={b.id} className="flex h-9 items-center">
            {b.title}
            {b.icon}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
const btnData = [
  {
    id: 1,
    title: "filter",
    icon: <Filter />,
  },
  {
    id: 2,
    title: "Add User",
    icon: <Plus />,
  },
];
