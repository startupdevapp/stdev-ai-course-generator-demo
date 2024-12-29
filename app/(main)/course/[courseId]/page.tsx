'use client';

import { getPublishCourseByCourseId } from '@/app/(user)/actions/getCourse';
import ChapterList from '@/app/(user)/create-course/[courseId]/_components/ChapterList';
import CourseBasicInfo from '@/app/(user)/create-course/[courseId]/_components/CourseBasicInfo';
import CourseDetail from '@/app/(user)/create-course/[courseId]/_components/CourseDetail';
import { Course } from '@/types';
import React, { use, useEffect, useState } from 'react';

type Params = Promise<{ courseId: string }>;

const CoursePreviewPage = (props: { params: Params }) => {
	const params = use(props.params);
	const [course, setCourse] = useState<Course>({} as Course);
	const [loading, setLoading] = useState(false);

	const courseId = params?.courseId;

	useEffect(() => {
		const getCourse = async () => {
			setLoading(true);
			if (!courseId) {
				setLoading(false);
				return;
			}
			try {
				// Fetch course data
				const result = await getPublishCourseByCourseId(courseId);

				setCourse(result as Course);
			} finally {
				setLoading(false);
			}
		};

		getCourse();
	}, [courseId]);

	return (
		<div className="mt-10 px-10 md:px-20 lg:px-44">
			<CourseBasicInfo course={course} />
			<CourseDetail course={course} />
			<ChapterList course={course} />
		</div>
	);
};

export default CoursePreviewPage;
