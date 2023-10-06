-- CreateTable
CREATE TABLE `mesaje` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_expeditor` INTEGER NOT NULL,
    `id_destinatar` INTEGER NOT NULL,
    `subiect` VARCHAR(255) NOT NULL,
    `mesaj` VARCHAR(4000) NOT NULL,
    `stare` VARCHAR(24) NOT NULL DEFAULT 'activ',
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(0) NULL,
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
