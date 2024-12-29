'use server';

import { generateCourseByAI } from '@/configs/AiModel';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { auth } from '@clerk/nextjs/server';

type CreateCourseProps = {
	courseId: string;
	language: string;
	category: string;
	topic: string;
	level: string;
	duration: string;
	video: string;
	numOfChapters: number;
	description?: string;
	createdBy: string;
	userName: string;
	userProfileImage: string;
};

export async function createCourseContent(data: CreateCourseProps) {
	try {
		const user = auth();
		if (!user) return;

		const PROMPT = `Generate A Course Tutorial on Following Detail With Field as courseName, description, Along with chapterName, about, duration: category: ${data?.category}, topic: ${data?.topic}, level: ${data?.level}, duration: ${data?.duration}, numOfChapters: ${data?.numOfChapters}, in JSON format and using ${data?.language}`;

		// Call the AI model to generate the course
		const result = await generateCourseByAI.sendMessage(PROMPT);

		if (!result.response) {
			return;
		}

		const courseOutputByAI = JSON.parse(result?.response?.text());

		// Save course on database

		await db.insert(CourseList).values({
			courseId: data?.courseId,
			language: data?.language,
			category: data?.category,
			topic: data?.topic,
			level: data?.level,
			courseOutputByAI: courseOutputByAI,
			createdBy: data?.createdBy,
			userName: data?.userName,
			userProfileImage: data?.userProfileImage,
		});
	} catch (error) {
		console.error('Failed to create course', error);
	}
}
