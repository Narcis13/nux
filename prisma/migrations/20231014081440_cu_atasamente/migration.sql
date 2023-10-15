-- CreateTable
CREATE TABLE `atasamente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `original_name` VARCHAR(255) NOT NULL,
    `new_name` VARCHAR(255) NOT NULL,
    `mimetype` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `size` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
