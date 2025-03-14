-- DropForeignKey
ALTER TABLE "Blogs" DROP CONSTRAINT "Blogs_userId_fkey";

-- AddForeignKey
ALTER TABLE "Blogs" ADD CONSTRAINT "Blogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
