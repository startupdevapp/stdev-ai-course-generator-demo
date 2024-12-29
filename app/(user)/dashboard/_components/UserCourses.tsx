'use client';

import { Course } from '@/types';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react';
import { getAllCoursesByUser } from '../../actions/getCourse';
import CourseCard from '@/app/(main)/courses/_components/CourseCard';
import Loading from '@/app/_components/Loading';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';

const UserCourses = () => {
	const { user } = useUser();
	const [userCourses, setUserCourses] = useState<Course[]>([]);
	const [loading, setLoading] = useState(false);

	const { setUserCourseList } = useContext(UserCourseListContext);

	const email = user?.primaryEmailAddress?.emailAddress;

	useEffect(() => {
		if (!email) return;
		const getCourse = async () => {
			setLoading(true);
			const result = await getAllCoursesByUser(email);
			if (result) {
				setUserCourses(result as Course[]);
				setUserCourseList(result as Course[]);
			}
			setLoading(false);
		};
		getCourse();
	}, [email, setUserCourseList]);

	return (
		<div className="p-10">
			<h2 className="text-3xl font-bold">My AI Course</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-5">
				{loading || userCourses?.length === undefined ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
						<Loading />
					</div>
				) : userCourses?.length > 0 ? (
					userCourses.map((course, index) => (
						<div key={index}>
							<CourseCard course={course} edit={true} />
						</div>
					))
				) : (
					<h2 className="font-bold text-lg text-myPrimary">
						You haven&apos;t created any course yet.
					</h2>
				)}
			</div>
		</div>
	);
};

export default UserCourses;
