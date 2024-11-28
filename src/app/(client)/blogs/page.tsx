import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const page = async () => {
  const blogData = await prisma.blogs.findMany();
  return (
    <div>
      <div className=" flex flex-col gap-6 px-8">
        {blogData.map((b) => (
          <Link key={b.id} href={`/blogs/${b.id}`}>
            <div className=" w-96 h-96 bg-gray-300 space-y-6">
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
