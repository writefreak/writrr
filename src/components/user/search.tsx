import { Filter, Plus, Search, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <div>
        <form className="flex items-center border p-1 gap-2 border-black rounded-full">
          <Search strokeWidth={1} className="h-5 w-5" />
          <input
            type="text"
            className="bg-transparent outline-none"
            placeholder="search..."
          />
        </form>
        <div className="flex md:pt-0 gap-2 pt-2">
          <Button className="flex h-9 rounded-full md:hidden items-center">
            <Plus />
            Add User
          </Button>
          <Button className="flex h-9 rounded-full md:hidden items-center">
            <Trash2 />
            Delete User
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {btnData.map((b) => (
          <Button
            key={b.id}
            className="md:flex rounded-full h-9 items-center hidden"
          >
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
