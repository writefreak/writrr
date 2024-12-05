import UserPage from "@/components/user/userPage";
import { BlogsType } from "@/lib/actions/blog";
import prisma from "@/lib/prisma";
import React from "react";

// interface Props {
//   params: Promise<{
//     blogId: string;
//   }>;

//   id: any;
//   data: BlogsType;
// }

const page = async () => {
  return (
    <div>
      <UserPage />
    </div>
  );
};

export default page;
