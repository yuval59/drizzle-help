CREATE TABLE `message` (
	`id` serial AUTO_INCREMENT,
	`content` text NOT NULL,
	`sender_id` int NOT NULL,
	`recipientt_id` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` serial AUTO_INCREMENT,
	`username` text NOT NULL
);
