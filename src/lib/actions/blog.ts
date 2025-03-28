"use server";

import prisma from "../prisma";

export async function getBlogs() {
  try {
    const data = await prisma.blogs.findMany({
      include: {
        category: true,
        images: true,
        user: true,
      },
    });
    return data || [];
  } catch (error) {
    console.log("error", error);
    return [];
  }
}

export type BlogsType = Awaited<ReturnType<typeof getBlogs>>;
