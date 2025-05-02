"use server";

import prisma from "@/lib/prisma";
import { validateRequest } from "@/lib/validate-request";
import { redirect } from "next/navigation";

export async function getProfile() {
  const { session } = await validateRequest();
  if (!session) redirect("/");
  const loggedUser = await prisma.user.findUnique({
    where: {
      id: session.userId,
    },
    select: {
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      about: true,
      image: {
        select: {
          url: true,
        },
      },
    },
  });
  console.log(loggedUser);
  return loggedUser;
}

export type UserData = Awaited<ReturnType<typeof getProfile>>;
