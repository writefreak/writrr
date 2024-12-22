import React from "react";

const ProfblogContent = () => {
  return (
    <div className="pt-10 space-y-2">
      <h3 className="text-lg font-bold">Blog Content</h3>
      <p className="text-xs md:text-sm text-gray-500">
        Create your new blog here
      </p>
      <div className="md:h-[30vh] h-[40vh] w-full md:w-[85vw]">
        <textarea className="w-full h-full outline-none border border-black p-4 rounded-xl" />
      </div>
    </div>
  );
};

export default ProfblogContent;
