/*
  Warnings:

  - Added the required column `filename` to the `atasamente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filepath` to the `atasamente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `atasamente` ADD COLUMN `filename` VARCHAR(255) NOT NULL,
    ADD COLUMN `filepath` VARCHAR(255) NOT NULL;
