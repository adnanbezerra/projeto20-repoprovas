/*
  Warnings:

  - You are about to drop the column `disciplinesId` on the `teachersDisciplines` table. All the data in the column will be lost.
  - You are about to drop the column `teachersId` on the `teachersDisciplines` table. All the data in the column will be lost.
  - You are about to drop the column `categoriesId` on the `tests` table. All the data in the column will be lost.
  - You are about to drop the column `teachersDisciplinesId` on the `tests` table. All the data in the column will be lost.
  - Added the required column `disciplineId` to the `teachersDisciplines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `teachersDisciplines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `tests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherDisciplineId` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teachersDisciplines" DROP CONSTRAINT "teachersDisciplines_disciplinesId_fkey";

-- DropForeignKey
ALTER TABLE "teachersDisciplines" DROP CONSTRAINT "teachersDisciplines_teachersId_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_categoriesId_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teachersDisciplinesId_fkey";

-- AlterTable
ALTER TABLE "teachersDisciplines" DROP COLUMN "disciplinesId",
DROP COLUMN "teachersId",
ADD COLUMN     "disciplineId" INTEGER NOT NULL,
ADD COLUMN     "teacherId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "categoriesId",
DROP COLUMN "teachersDisciplinesId",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "teacherDisciplineId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES "teachersDisciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
