'use server';

import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { and, desc, eq, ne } from 'drizzle-orm';

// get courseID by user
export const getUserCourseByCourseId = async (
	courseId: string,
	email: string
) => {
	try {
		const course = await db
			.select()
			.from(CourseList)
			.where(
				and(eq(CourseList?.courseId, courseId), eq(CourseList.createdBy, email))
			)
			.execute();

		return course[0];
	} catch (error) {
		console.error(error);
	}
};

// get all courses by user
export const getAllCoursesByUser = async (email: string) => {
	try {
		const courses = await db
			.select()
			.from(CourseList)
			.where(eq(CourseList.createdBy, email))
			.orderBy(desc(CourseList?.id))
			.execute();

		return courses;
	} catch (error) {
		console.error(error);
	}
};

// publish course

export const getPublishCourseByCourseId = async (courseId: string) => {
	try {
		const course = await db
			.select()
			.from(CourseList)
			.where(
				and(eq(CourseList?.courseId, courseId), eq(CourseList?.publish, true))
			)
			.execute();

		return course[0];
	} catch (error) {
		console.error(error);
	}
};

// get all published courses by category

export const getAllPublishedCoursesByCat = async (category: string) => {
	if (!category || category === '') {
		const courses = await db
			.select()
			.from(CourseList)
			.where(eq(CourseList?.publish, true))
			.orderBy(desc(CourseList?.id));
		return courses;
	}
	try {
		const courses = await db
			.select()
			.from(CourseList)
			.where(
				and(eq(CourseList?.category, category), eq(CourseList?.publish, true))
			)
			.orderBy(desc(CourseList?.id));
		return courses;
	} catch (error) {
		console.error(error);
	}
};

// get all published courses by other user
export const getAllPublishedCoursesByOtherUser = async (email: string) => {
	try {
		const courses = await db
			.select()
			.from(CourseList)
			.where(
				and(ne(CourseList?.createdBy, email), eq(CourseList?.publish, true))
			)
			.execute();

		return courses;
	} catch (error) {
		console.error(error);
	}
};
