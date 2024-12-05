import { Filter, Plus, Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <form className="flex items-center border p-1 gap-2 border-black rounded-md">
          <Search />
          <input
            type="text"
            className="bg-transparent outline-none"
            placeholder="search..."
          />
        </form>
      </div>
      <div className="flex items-center gap-2">
        {btnData.map((b) => (
          <Button key={b.id} className="md:flex h-9 items-center hidden">
            {b.title}
            {b.icon}
          </Button>
        ))}
        <Button className="flex h-9 md:hidden items-center">
          <Plus />
          Add User
        </Button>
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
