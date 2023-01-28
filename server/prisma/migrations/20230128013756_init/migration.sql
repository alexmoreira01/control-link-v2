/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `Link` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Link_label_key` ON `Link`(`label`);
