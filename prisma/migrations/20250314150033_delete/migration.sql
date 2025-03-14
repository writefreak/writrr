-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_blogId_fkey";

-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_userId_fkey";

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
