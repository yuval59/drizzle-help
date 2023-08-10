ALTER TABLE `message` RENAME COLUMN `recipientt_id` TO `recipient_id`;--> statement-breakpoint
ALTER TABLE `message` MODIFY COLUMN `id` serial AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `id` serial AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `message` ADD `timestamp` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `message` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `user` ADD PRIMARY KEY(`id`);