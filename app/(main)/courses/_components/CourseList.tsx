import { Course } from '@/types';
import React from 'react';
import CourseCard from './CourseCard';
import QueryPagination from './QueryPagination';

interface CourseListProps {
	displayCourses: Course[];
	totalPages: number;
}

const CourseList = ({ displayCourses, totalPages }: CourseListProps) => {
	return (
		<div className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
				{displayCourses?.map((course, index) => (
					<CourseCard key={index} course={course} />
				))}
			</div>
			<div className="mt-10">
				<QueryPagination totalPages={totalPages} />
			</div>
		</div>
	);
};

export default CourseList;
