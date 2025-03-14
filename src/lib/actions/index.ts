"use server";

import prisma from "../prisma";

export async function getBlogCategories() {
  try {
    const categories = await prisma.category.findMany({
      select: {
        name: true,
      },
    });

    return categories || [];
  } catch (error) {
    return [];
  }
}
