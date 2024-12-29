'use client';

import React, { useEffect, useState } from 'react';
import { getAllPublishedCoursesByCat } from '../(user)/actions/getCourse';
import { Course } from '@/types';
import CourseCard from '../(main)/courses/_components/CourseCard';
import Loading from './Loading';

const Features = () => {
	const [courses, setCourses] = useState<Course[]>([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const getCourses = async () => {
			setLoading(true);
			const result = await getAllPublishedCoursesByCat('');
			if (result) {
				setCourses(result as Course[]);
			}
			setLoading(false);
		};
		getCourses();
	}, []);

	const eightCourses = courses.slice(0, 8);

	return (
		<div className="p-10">
			<h2 className="text-3xl font-bold">Explore Courses Build With AI</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-5">
				{loading || eightCourses?.length === undefined ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
						<Loading />
					</div>
				) : eightCourses?.length > 0 ? (
					eightCourses.map((course, index) => (
						<div key={index}>
							<CourseCard course={course} />
						</div>
					))
				) : (
					<h2 className="font-bold text-lg text-myPrimary">No courses found</h2>
				)}
			</div>
		</div>
	);
};

export default Features;
