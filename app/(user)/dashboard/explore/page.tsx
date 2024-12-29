'use client';

import CourseCard from '@/app/(main)/courses/_components/CourseCard';
import Loading from '@/app/_components/Loading';
import { Course } from '@/types';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { getAllPublishedCoursesByOtherUser } from '../../actions/getCourse';

const ExplorePage = () => {
	const { user } = useUser();
	const [userCourses, setUserCourses] = useState<Course[]>([]);
	const [loading, setLoading] = useState(false);

	const email = user?.primaryEmailAddress?.emailAddress;

	useEffect(() => {
		if (!email) return;
		const getCourse = async () => {
			setLoading(true);
			const result = await getAllPublishedCoursesByOtherUser(email);
			if (result) {
				setUserCourses(result as Course[]);
			}
			setLoading(false);
		};
		getCourse();
	}, [email]);
	return (
		<div className="p-10">
			<h2 className="text-3xl font-bold">Explore More Projects</h2>
			<p>Explore more projects build with AI by other users </p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-5">
				{loading || userCourses?.length === undefined ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
						<Loading />
					</div>
				) : userCourses?.length > 0 ? (
					userCourses.map((course, index) => (
						<div key={index}>
							<CourseCard course={course} />
						</div>
					))
				) : (
					<h2 className="font-bold text-lg text-myPrimary">No Courses found</h2>
				)}
			</div>
		</div>
	);
};

export default ExplorePage;
