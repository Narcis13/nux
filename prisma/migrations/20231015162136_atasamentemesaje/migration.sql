-- CreateTable
CREATE TABLE `atasamentemesaje` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mesaj_id` INTEGER NOT NULL,
    `atasament_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `atasamentemesaje` ADD CONSTRAINT `atasamentemesaje_mesaj_id_fkey` FOREIGN KEY (`mesaj_id`) REFERENCES `mesaje`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `atasamentemesaje` ADD CONSTRAINT `atasamentemesaje_atasament_id_fkey` FOREIGN KEY (`atasament_id`) REFERENCES `atasamente`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
