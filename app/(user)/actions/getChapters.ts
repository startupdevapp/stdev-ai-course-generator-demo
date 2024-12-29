'use server';

import { db } from '@/configs/db';
import { Chapters } from '@/configs/schema';
import { and, eq } from 'drizzle-orm';

export const getChapterById = async (courseId: string, chapterId: number) => {
	try {
		const chapter = await db
			.select()
			.from(Chapters)
			.where(
				and(eq(Chapters.courseId, courseId), eq(Chapters.chapterId, chapterId))
			)
			.execute();
		return chapter[0];
	} catch (error) {
		console.error(error);
	}
};
