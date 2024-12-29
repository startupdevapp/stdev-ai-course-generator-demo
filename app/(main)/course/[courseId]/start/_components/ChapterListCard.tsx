import { CourseOutputChapter } from '@/types';
import { Clock } from 'lucide-react';
import React from 'react';

interface ChapterListCardProps {
	courseChapter: CourseOutputChapter;
	index: number;
}

const ChapterListCard = ({ courseChapter, index }: ChapterListCardProps) => {
	return (
		<div className="grid grid-cols-5 p-3 items-center border-b">
			<div>
				<h2 className="p-1 rounded-full bg-blue-600 w-8 h-8 text-white text-center items-center">
					{index + 1}
				</h2>
			</div>
			<div className="col-span-4">
				<h2>{courseChapter?.chapterName}</h2>
				<h2 className="flex text-myPrimary items-center gap-2">
					<Clock />
					{courseChapter?.duration}
				</h2>
			</div>
		</div>
	);
};

export default ChapterListCard;
