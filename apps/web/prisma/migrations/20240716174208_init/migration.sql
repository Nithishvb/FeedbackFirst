-- CreateTable
CREATE TABLE "Space" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "isStarRating" BOOLEAN NOT NULL,

    CONSTRAINT "Space_pkey" PRIMARY KEY ("id")
);
