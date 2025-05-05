/*
  Warnings:

  - You are about to drop the column `subcategories` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "subcategories",
ADD COLUMN     "subcategory" TEXT;
