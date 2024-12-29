import {
	boolean,
	integer,
	json,
	pgTable,
	serial,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core';

export const CourseList = pgTable('courseList', {
	id: serial('id').primaryKey(),
	courseId: varchar('courseId').notNull(),
	language: varchar('language').notNull(),
	category: varchar('category').notNull(),
	topic: varchar('topic').notNull(),
	level: varchar('level').notNull(),
	video: varchar('video').notNull().default('yes'),
	courseOutputByAI: json('courseOutputByAI').notNull(),
	createdBy: varchar('createdBy').notNull(),
	userName: varchar('userName').notNull(),
	userProfileImage: varchar('userProfileImage'),
	courseBanner: varchar('courseBanner').notNull().default('/placeholder.png'),
	publish: boolean('publish').default(false),
	createdAt: timestamp('createdAt').notNull().defaultNow(),
});

export const Chapters = pgTable('chapters', {
	id: serial('id').primaryKey(),
	chapterId: integer('chapterId').notNull(),
	content: json('content').notNull(),
	videoId: varchar('videoId').notNull(),
	courseId: varchar('courseId').notNull(),
});
