-- CreateEnum
CREATE TYPE "status" AS ENUM ('reçus', 'en_cours', 'rejetter', 'resolus');

-- AlterTable
ALTER TABLE "Signalemment" ADD COLUMN     "status" "status" NOT NULL DEFAULT 'reçus';
