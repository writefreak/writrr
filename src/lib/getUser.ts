import prisma from "@/lib/prisma";

export default async function getUser(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
  });
}
