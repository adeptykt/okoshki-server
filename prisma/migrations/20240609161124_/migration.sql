/*
  Warnings:

  - You are about to drop the column `main` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `subcategories` on the `Category` table. All the data in the column will be lost.
  - Made the column `image` on table `Category` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "main",
DROP COLUMN "subcategories",
ALTER COLUMN "image" SET NOT NULL;
