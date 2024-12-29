import MarkdownDisplay from '@/app/_components/MarkdownDisplay';
import { Chapter, CourseOutputChapter } from '@/types';
import React from 'react';
import ChapterVideo from './ChapterVideo';

interface ChapterContentProps {
	chapter: Chapter;
	selectedChapter: CourseOutputChapter;
}

const ChapterContent = ({ chapter, selectedChapter }: ChapterContentProps) => {
	const chapterContent = chapter?.content;
	const chapterSections = chapterContent?.chapter.sections;

	return (
		<div className="p-10">
			<h2 className="text-2xl font-bold">{selectedChapter?.chapterName}</h2>
			<h2 className="text-gray-800">{selectedChapter?.about}</h2>
			{/* Video */}
			<div className="justify-center flex my-5">
				<ChapterVideo id={chapter?.videoId} />
			</div>
			{/* Chapter content */}
			<div>
				{chapterSections && Array.isArray(chapterSections)
					? chapterSections.map((item, index) => (
							<div key={index} className="p-5 mb-10 rounded-lg">
								<h2 className="font-medium text-lg">{item?.title}</h2>

								<MarkdownDisplay>{item?.explanation}</MarkdownDisplay>
								<p className="text-gray-600 mt-2">{item?.explanation}</p>
								{item?.code && (
									<div className="p-3 bg-gray-700 text-white rounded-lg">
										<pre>
											<code>{item?.code}</code>
										</pre>
									</div>
								)}
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

export default ChapterContent;
