'use client';

import { useUser } from '@clerk/nextjs';
import React, { use, useEffect, useState, useTransition } from 'react';
import { getUserCourseByCourseId } from '../../actions/getCourse';
import { Course } from '@/types';
import HeaderContent from '../../_components/HeaderContent';
import CourseBasicInfo from './_components/CourseBasicInfo';
import ChapterList from './_components/ChapterList';
import CourseDetail from './_components/CourseDetail';
import { Button } from '@/components/ui/button';
import { createChaptersContent } from '../../actions/createChapters';
import { useRouter } from 'next/navigation';

type Params = Promise<{ courseId: string }>;

const CreateCourseLayoutPage = (props: { params: Params }) => {
	const params = use(props.params);
	const { user } = useUser();
	const [isPending, startTransition] = useTransition();
	const [course, setCourse] = useState<Course>({} as Course);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const email = user?.primaryEmailAddress?.emailAddress;
	const courseId = params?.courseId;

	// Fetch course data

	useEffect(() => {
		const getCourse = async () => {
			setLoading(true);
			if (!courseId || !email) {
				setLoading(false);
				return;
			}
			try {
				const result = await getUserCourseByCourseId(courseId, email);
				setCourse(result as Course);
			} finally {
				setLoading(false);
			}
		};
		getCourse();
	}, [courseId, email]);

	const generateChaptersContent = () => {
		// Generate chapters content
		startTransition(async () => {
			if (!user) return;

			try {
				await createChaptersContent(course);
				router.push(`/create-course/${courseId}/finish`);
			} catch (error) {
				console.error('Failed to create chapters content', error);
			}
		});
	};

	return (
		<div className="mt-10 px-8 md:px-20 lg:px-44">
			<HeaderContent leftsideTitle="Course" rightsideTitle="Layout" />
			<CourseBasicInfo course={course} edit={true} />
			<CourseDetail course={course} />
			<ChapterList course={course} edit={true} />
			<Button
				className="text-lg p-6 bg-myPrimary hover:bg-myPrimary/80 mt-10"
				onClick={generateChaptersContent}
				disabled={isPending || loading || course?.publish}
			>
				{course?.publish
					? 'Course Content Generated and Published'
					: 'Generate Chapter Content'}
			</Button>
		</div>
	);
};

export default CreateCourseLayoutPage;
