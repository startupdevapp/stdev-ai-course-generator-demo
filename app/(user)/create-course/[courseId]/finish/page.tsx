'use client';

import React, { use, useEffect, useState } from 'react';
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { useUser } from '@clerk/nextjs';
import { Course } from '@/types';
import { getUserCourseByCourseId } from '@/app/(user)/actions/getCourse';
import Link from 'next/link';
import { CopyCheck } from 'lucide-react';

type Params = Promise<{ courseId: string }>;

const FinishScreenPage = (props: { params: Params }) => {
	const params = use(props.params);
	const { user } = useUser();
	const [course, setCourse] = useState<Course>({} as Course);
	const [loading, setLoading] = useState(false);

	const email = user?.primaryEmailAddress?.emailAddress;
	const courseId = params?.courseId;

	useEffect(() => {
		const getCourse = async () => {
			setLoading(true);
			if (!courseId || !email) {
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

	const copyUrl = async () => {
		await navigator.clipboard.writeText(
			`${process.env.NEXT_PUBLIC_HOSTNAME}/course/${course?.courseId}`
		);
	};

	return (
		<div className="px-10 md:px-20 lg:px-44 mt-8">
			<h2 className="text-center font-bold text-2xl text-green-500">
				Congrats! Your course is ready to be published.
			</h2>
			<CourseBasicInfo course={course} />
			<h2 className="mt-5">Course Url:</h2>
			<div className="bg-white">
				<h2 className="flex text-center text-gray-400 border p-6 rounded items-center justify-between">
					<Link
						className="hover:text-blue-600"
						href={`/course/${course?.courseId}`}
					>
						{`${process.env.NEXT_PUBLIC_HOSTNAME}/course/${course?.courseId}`}
					</Link>

					<span
						onClick={copyUrl}
						className="flex items-center gap-2 hover:bg-blue-600 hover:text-white p-2 rounded-md cursor-pointer"
					>
						Copy link <CopyCheck size={25} />
					</span>
				</h2>
			</div>
		</div>
	);
};

export default FinishScreenPage;
