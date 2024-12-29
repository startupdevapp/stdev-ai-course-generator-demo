'use server';
import { generateChaptersByAI } from '@/configs/AiModel';

import { Course } from '@/types';
import { auth } from '@clerk/nextjs/server';
import { getVideos } from '@/configs/service';
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';

export async function createChaptersContent(course: Course) {
	try {
		const user = auth();

		if (!user) return;

		const chapters = course?.courseOutputByAI?.chapters;

		chapters?.forEach(async (chapter, index) => {
			const PROMPT = `Explain the concept in Detail on Topic: ${course?.topic}, Course Name: ${course?.courseOutputByAI?.courseName}, Chapter: ${chapter?.chapterName} with array of object (in JSON Format) with fields as title, explanation on give chapter in detail, Code Example (Code field in <precode> format) if applicable and using ${course?.language}.`;

			// Generate video

			let videoId = '';
			getVideos(
				`${course?.courseOutputByAI?.courseName} : ${chapter?.chapterName}`
			).then((res) => {
				videoId = res[0].id?.videoId;
			});

			// Generate chapters content
			const result = await generateChaptersByAI.sendMessage(PROMPT);
			const content = JSON.parse(result?.response?.text());

			// Save Chapters on database
			await db.insert(Chapters).values({
				chapterId: index,
				content: content,
				videoId: videoId,
				courseId: course?.courseId,
			});
		});

		await db
			.update(CourseList)
			.set({ publish: true })
			.where(eq(CourseList.courseId, course?.courseId));
	} catch (error) {
		console.error('Failed to create chapters content', error);
	}
}
