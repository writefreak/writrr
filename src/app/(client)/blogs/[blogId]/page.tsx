import Footer from "@/components/footer";
import HtmlText from "@/components/html-text";
import Image from "@/components/image";
import Picture from "@/components/ui/image";
import prisma from "@/lib/prisma";
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
    <div>
      <div className="p-6 md:px-16 md:py-12 md:p-0 space-y-5">
        <div className="">
          <div className="md:h-[500px]  md:w-[900px] h-[300px]">
            <Image
              bucketName="images"
              folderName="blogs"
              src={data?.images[0].url || ""}
              alt=""
              className="w-full h-full rounded-xl md:rounded-none object-cover"
            />
          </div>
        </div>
        <div className="">
          <div className="md:pt-6 space-y-3">
            <div className="space-y-3">
              <h3 className="md:text-4xl font-inter w-96 md:w-full text-2xl">
                {data?.title}
              </h3>
              <div className=" bg-lime-600 w-24 rounded-full text-center p-1">
                <h6 className="text-xs">{data?.category.name}</h6>
              </div>
            </div>
            <HtmlText
              text={data?.description || ""}
              className="font-poppins font-light md:pt-5"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
