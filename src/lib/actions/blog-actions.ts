"use server";

import { revalidatePath } from "next/cache";

import prisma from "../prisma";
import { PostFormInput, PostFormSchema } from "../validators/auth";
import { validateRequest } from "../validate-request";

export interface ActionResponse<T> {
  fieldError?: Partial<Record<keyof T, string | undefined>>;
  formError?: string;
  data?: boolean;
  res?: Partial<Record<keyof T, string | undefined>>; //return a parial info of any data
}

export async function getPosts(args: {
  cursor?: string;
  take: number;
  skip: number;
  orderBy: {
    createdAt: "asc" | "desc";
  };
}) {
  try {
    const { user } = await validateRequest(); //use anywhere you want to validate user
    const { take, skip, orderBy } = args;
    const posts = await prisma.blogs.findMany({
      where: {
        userId: user?.id,
      },
      take,
      include: {
        images: {
          select: {
            url: true,
          },
          take: 1,
        },
      },
    });
    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export type PostsType = Awaited<ReturnType<typeof getPosts>>;
export async function getPostData(postId?: string) {
  try {
    if (!postId) return null;
    const post = await prisma.blogs.findUnique({
      where: { id: postId },
      select: {
        id: true,
        created: true,
        description: true,
        title: true,
        images: {
          select: { url: true },
          take: 1,
        },
        category: {
          select: {
            name: true,
          },
        },
        // session: {
        //   select: {
        //     id: true,
        //     userId: true,
        //     expiresAt: true
        //   },
        // },
      },
    });

    return post;
  } catch (error) {
    return null;
  }
}

export type PostType = Awaited<ReturnType<typeof getPostData>>;

export async function createPost(
  _: any,
  data: PostFormInput
): Promise<ActionResponse<PostFormInput>> {
  try {
    const { user } = await validateRequest();
    if (!user?.id)
      return {
        formError: "unauthorized user",
      };
    const parsed = PostFormSchema.safeParse(data);
    if (!parsed.success) {
      const err = parsed.error.flatten();
      return {
        fieldError: {
          title: err.fieldErrors.title?.[0],
          description: err.fieldErrors.description?.[0],
          category: err.fieldErrors.category?.[0],
          images: err.fieldErrors.images?.[0],
        },
      };
    }
    const { id, images, title, description, category } = data;
    if (id) {
      await prisma.blogs.update({
        where: {
          id,
        },
        data: {
          title,
          description,
          user: {
            connect: { id: user.id },
          },
          category: {
            connect: { name: category },
          },
          ...(images?.length
            ? {
                images: {
                  create: images.map((img) => ({ url: img.url })),
                },
              }
            : {}),
        },
      });
      return {
        data: true,
      };
    } else {
      await prisma.blogs.create({
        data: {
          ...(images
            ? {
                images: {
                  create: images.map((img) => ({ url: img.url })),
                },
              }
            : {}),
          user: {
            connect: { id: user.id },
          },
          category: {
            connect: { name: category },
          },
          title,
          description,
        },
      });
      return {
        data: true,
      };
    }
  } catch (error) {
    return {
      formError: "Error occurred",
    };
  }
}

export async function DeletePost(postId: string) {
  try {
    if (!postId) return false;
    await prisma.blogs.delete({
      where: { id: postId },
    });
    revalidatePath("/admin/blog");
    return true;
  } catch (error) {
    return false;
  }
}
