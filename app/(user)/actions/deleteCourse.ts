'use server';

import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { auth } from '@clerk/nextjs/server';
import { and, eq } from 'drizzle-orm';

export async function deleteCourseByUser(courseId: string, email: string) {
	try {
		const user = auth();
		if (!user) return;

		const res = await db
			.delete(CourseList)
			.where(
				and(eq(CourseList.courseId, courseId), eq(CourseList.createdBy, email))
			)
			.returning({ courseId: CourseList.courseId });

		const deletedCourseId = res[0]?.courseId;

		// delete related chapters of deleted course

		await db
			.delete(Chapters)
			.where(eq(Chapters.courseId, deletedCourseId))
			.returning({ courseId: Chapters.courseId });
	} catch (error) {
		console.error(error);
	}
}
