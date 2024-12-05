import React from "react";
import BlogSearch from "../blogs/blogSearch";
import SearchBar from "./search";

const AllUsers = () => {
  return (
    <div className="flex  space-y-3 pt-6 md:pt-4 items-center md:w-[900px] justify-between">
      <h3>All Users</h3>
      <SearchBar />
    </div>
  );
};

export default AllUsers;
