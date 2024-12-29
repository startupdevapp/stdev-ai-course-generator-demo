import { Course } from '@/types';
import React from 'react';
import EditChapters from './EditChapters';

interface ChapterListProps {
	course: Course;
	edit: boolean;
}

const ChapterList = ({ course, edit }: ChapterListProps) => {
	const courseChapters = course?.courseOutputByAI?.chapters;

	return (
		<div className="mt-5">
			<h2 className="text-2xl font-medium">Chapters</h2>
			<div className="mt-3">
				{courseChapters?.map((chapter, index) => (
					<div
						key={index}
						className="p-5 flex items-center justify-between bg-white border rounded-lg mt-5"
					>
						<div className="flex items-center gap-3">
							<h2 className="bg-myPrimary p-2 text-white rounded-full min-h-10 min-w-10 text-center">
								{index + 1}
							</h2>
							<div>
								<h2 className="text-xl font-medium flex">
									{chapter?.chapterName}
									{edit && !course.publish && (
										<EditChapters course={course} index={index} />
									)}
								</h2>
								<p>{chapter?.about}</p>
								<p className="flex items-center text-myPrimary">
									{chapter?.duration}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ChapterList;
