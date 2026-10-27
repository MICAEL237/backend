-- CreateTable
CREATE TABLE "Assignation" (
    "userId" TEXT NOT NULL,
    "signalementId" TEXT NOT NULL,

    CONSTRAINT "Assignation_pkey" PRIMARY KEY ("userId","signalementId")
);

-- AddForeignKey
ALTER TABLE "Assignation" ADD CONSTRAINT "Assignation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignation" ADD CONSTRAINT "Assignation_signalementId_fkey" FOREIGN KEY ("signalementId") REFERENCES "Signalemment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
