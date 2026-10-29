/*
  Warnings:

  - The `latitude` column on the `Signalemment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `longitude` column on the `Signalemment` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Signalemment" DROP COLUMN "latitude",
ADD COLUMN     "latitude" INTEGER,
DROP COLUMN "longitude",
ADD COLUMN     "longitude" INTEGER;
