import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const blogs = await prisma.blogs.findMany(); // Fetch blogs using Prisma
  return new Response(JSON.stringify(blogs), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
