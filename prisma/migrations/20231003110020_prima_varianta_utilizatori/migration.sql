-- CreateTable
CREATE TABLE `utilizatoriplace` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parola` VARCHAR(255) NOT NULL,
    `numeadresa` VARCHAR(255) NOT NULL,
    `e_admin` BOOLEAN NOT NULL DEFAULT false,
    `last_login` DATETIME(0) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(0) NULL,
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
