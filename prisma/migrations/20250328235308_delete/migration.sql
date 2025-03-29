-- DropForeignKey
ALTER TABLE "Blogs" DROP CONSTRAINT "Blogs_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "Blogs" ADD CONSTRAINT "Blogs_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
