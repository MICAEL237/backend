/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[communeId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `communeId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "communeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Commune" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "nom_ville" TEXT NOT NULL,
    "population" INTEGER,
    "creer_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mod_lw" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Signalemment" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categorie" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "commune" TEXT NOT NULL,
    "creer_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mod_lw" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Commune_id_key" ON "Commune"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Commune_nom_key" ON "Commune"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Signalemment_id_key" ON "Signalemment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Signalemment_categorie_key" ON "Signalemment"("categorie");

-- CreateIndex
CREATE UNIQUE INDEX "Signalemment_user_key" ON "Signalemment"("user");

-- CreateIndex
CREATE UNIQUE INDEX "Signalemment_commune_key" ON "Signalemment"("commune");

-- CreateIndex
CREATE UNIQUE INDEX "Categorie_id_key" ON "Categorie"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_communeId_key" ON "User"("communeId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_communeId_fkey" FOREIGN KEY ("communeId") REFERENCES "Commune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signalemment" ADD CONSTRAINT "Signalemment_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signalemment" ADD CONSTRAINT "Signalemment_categorie_fkey" FOREIGN KEY ("categorie") REFERENCES "Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signalemment" ADD CONSTRAINT "Signalemment_commune_fkey" FOREIGN KEY ("commune") REFERENCES "Commune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
