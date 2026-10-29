-- CreateEnum
CREATE TYPE "role" AS ENUM ('citoyen', 'agent_municipale', 'admin');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('reçus', 'en_cours', 'rejetter', 'resolus');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "role" NOT NULL DEFAULT 'citoyen',
    "profil_picture" TEXT,
    "otpTpken" TEXT,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mod_le" TIMESTAMP(3) NOT NULL,
    "communeId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commune" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "nom_ville" TEXT NOT NULL,
    "population" INTEGER,
    "creer_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mod_lw" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commune_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Signalemment" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "categorie" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "latitude" TEXT,
    "longitude" TEXT,
    "status" "status" NOT NULL DEFAULT 'reçus',
    "user" TEXT NOT NULL,
    "commune" TEXT NOT NULL,
    "creer_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mod_lw" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Signalemment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assignation" (
    "userId" TEXT NOT NULL,
    "signalementId" TEXT NOT NULL,

    CONSTRAINT "Assignation_pkey" PRIMARY KEY ("userId","signalementId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_tel_key" ON "User"("tel");

-- CreateIndex
CREATE UNIQUE INDEX "Commune_nom_key" ON "Commune"("nom");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_communeId_fkey" FOREIGN KEY ("communeId") REFERENCES "Commune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signalemment" ADD CONSTRAINT "Signalemment_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signalemment" ADD CONSTRAINT "Signalemment_categorie_fkey" FOREIGN KEY ("categorie") REFERENCES "Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signalemment" ADD CONSTRAINT "Signalemment_commune_fkey" FOREIGN KEY ("commune") REFERENCES "Commune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignation" ADD CONSTRAINT "Assignation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignation" ADD CONSTRAINT "Assignation_signalementId_fkey" FOREIGN KEY ("signalementId") REFERENCES "Signalemment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
