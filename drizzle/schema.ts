import { pgTable, serial, varchar, integer, json, boolean } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"




export const courseChapters = pgTable("courseChapters", {
	id: serial("id").primaryKey().notNull(),
	courseId: varchar("courseId").notNull(),
	chapterId: integer("chapterId").notNull(),
	content: json("content").notNull(),
	videoId: varchar("videoId").notNull(),
});

export const courseList = pgTable("courseList", {
	id: serial("id").primaryKey().notNull(),
	courseId: varchar("courseId").notNull(),
	name: varchar("name").notNull(),
	category: varchar("category").notNull(),
	level: varchar("level").notNull(),
	courseOutput: json("courseOutput").notNull(),
	isVideo: varchar("isVideo").default('Yes').notNull(),
	username: varchar("username"),
	userprofileimage: varchar("userprofileimage"),
	createdBy: varchar("createdBy"),
	courseBanner: varchar("courseBanner"),
	isPublished: boolean("isPublished").default(false).notNull(),
});