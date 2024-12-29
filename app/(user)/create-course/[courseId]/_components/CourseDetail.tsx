import { Course } from '@/types';
import React from 'react';
import CourseDetailItem from './CourseDetailItem ';
import {
	ChartColumnIncreasing,
	Clock,
	SquarePlay,
	TableOfContents,
} from 'lucide-react';

interface CourseDetailProps {
	course: Course;
}

const CourseDetail = ({ course }: CourseDetailProps) => {
	return (
		<div className="border mt-5 p-10 rounded-lg shadow-md bg-white">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
				<CourseDetailItem
					label="Skill Level"
					content={course?.level}
					Icon={ChartColumnIncreasing}
				/>
				<CourseDetailItem
					label="Duration"
					content={course?.courseOutputByAI?.totalDuration}
					Icon={Clock}
				/>
				<CourseDetailItem
					label="Number Of Chapters"
					content={course?.courseOutputByAI?.numOfChapters}
					Icon={TableOfContents}
				/>
				<CourseDetailItem
					label="Video Included ?"
					content={course?.video}
					Icon={SquarePlay}
				/>
			</div>
		</div>
	);
};

export default CourseDetail;
