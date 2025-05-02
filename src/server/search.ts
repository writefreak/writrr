import prisma from "@/lib/prisma";

interface Props {
  search?: string;
}

export async function getSearch({ search }: Props) {
  try {
    if (!search) return [];
    const data = await prisma.blogs.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            category: {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            image: {
              select: {
                url: true,
              },
            },
          },
        },
        category: {
          select: {
            name: true,
          },
        },
        images: {
          select: {
            url: true,
          },
        },
      },
      orderBy: {
        created: "desc",
      },
      take: 10,
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export type SerachBlogData = Awaited<ReturnType<typeof getSearch>>;
