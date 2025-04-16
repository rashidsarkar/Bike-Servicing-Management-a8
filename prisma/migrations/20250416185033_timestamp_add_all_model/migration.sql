/*
  Warnings:

  - Added the required column `updatedAt` to the `bikes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `serviceRecords` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bikes" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "serviceRecords" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
