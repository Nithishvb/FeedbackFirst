-- CreateTable
CREATE TABLE "Feedbacks" (
    "id" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "spaceId" TEXT NOT NULL,

    CONSTRAINT "Feedbacks_pkey" PRIMARY KEY ("id")
);
