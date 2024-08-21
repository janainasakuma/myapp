-- CreateTable
CREATE TABLE `Faker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `birthDate` DATE NOT NULL,
    `email` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `userName` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Faker_userName_key`(`userName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
