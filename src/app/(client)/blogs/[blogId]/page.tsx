import Picture from "@/components/ui/image";
import prisma from "@/lib/prisma";
import Image from "next/image";
import React from "react";

interface Props {
  params: Promise<{
    blogId: string;
  }>;
}

const page = async (props: Props) => {
  const { blogId } = await props.params;
  const data = await prisma.blogs.findUnique({
    where: { id: blogId },
    select: {
      id: true,
      title: true,
      description: true,
      images: {
        select: {
          url: true,
        },
        take: 2,
      },
      category: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  });
  return (
    <div className="p-6 md:p-0 space-y-5">
      <div className="md:w-full md:h-[90vh] h-[300px] object-cover">
        <Picture
          src="/images/innovation-technology-be-creative-futuristic-concept.jpg"
          alt=""
          className="w-full h-full rounded-xl md:rounded-none"
        />
      </div>
      <div className="md:p-6 space-y-3">
        <div className="space-y-3">
          <h3 className="md:text-4xl font-inter w-96 md:w-full text-2xl">
            {data?.title}
          </h3>
          <div className=" bg-lime-200 w-24 rounded-full text-center p-1">
            <h6 className="text-xs">{data?.category.name}</h6>
          </div>
        </div>
        <p className="font-poppins font-light">{data?.description}</p>
      </div>
    </div>
  );
};

export default page;
