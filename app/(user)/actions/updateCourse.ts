'use server';

import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { Course } from '@/types';
import { auth } from '@clerk/nextjs/server';
import { and, eq } from 'drizzle-orm';

// updateCourseBanner
export async function updateCourseBanner(
	course: Course,
	email: string,
	downloadUrl: string
) {
	try {
		const user = auth();

		if (!user) {
			throw new Error('User not found');
		}

		await db
			.update(CourseList)
			.set({ courseBanner: downloadUrl })
			.where(
				and(
					eq(CourseList?.createdBy, email),
					eq(CourseList?.courseId, course?.courseId)
				)
			)
			.returning({ id: CourseList.id });
	} catch (error) {
		console.log(error);
	}
}

// Update course

export async function updateCourse(course: Course, email: string) {
	try {
		const user = auth();
		if (!user) {
			throw new Error('User not found');
		}

		await db
			.update(CourseList)
			.set({ courseOutputByAI: course?.courseOutputByAI })
			.where(
				and(
					eq(CourseList?.createdBy, email),
					eq(CourseList?.courseId, course?.courseId)
				)
			)
			.returning({ id: CourseList.id });
	} catch (error) {
		console.log(error);
	}
}
