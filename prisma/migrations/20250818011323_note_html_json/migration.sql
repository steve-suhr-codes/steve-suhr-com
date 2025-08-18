/*
  Warnings:

  - You are about to drop the column `note` on the `Note` table. All the data in the column will be lost.
  - Added the required column `noteHtml` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `noteJson` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Note" DROP COLUMN "note",
ADD COLUMN     "noteHtml" TEXT NOT NULL,
ADD COLUMN     "noteJson" TEXT NOT NULL;
