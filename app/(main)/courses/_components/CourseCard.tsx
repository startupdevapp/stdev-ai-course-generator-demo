import { deleteCourseByUser } from '@/app/(user)/actions/deleteCourse';
import DropdownOption from '@/app/_components/DropdownOption';
import { Course } from '@/types';
import { useUser } from '@clerk/nextjs';
import { EllipsisVerticalIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CourseCardProps {
	course: Course;
	edit?: boolean;
}

const CourseCard = ({ course, edit }: CourseCardProps) => {
	const router = useRouter();

	const { user } = useUser();

	const email = user?.primaryEmailAddress?.emailAddress;

	const deleteCourse = async (courseId: string) => {
		try {
			if (!email) return;
			await deleteCourseByUser(courseId, email);
			router.refresh();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="shadow-lg rounded-lg flex flex-col border-2 hover:cursor-pointer hover:border-myPrimary transition-transform duration-300 transform hover:scale-105">
			<Link href={`/course/${course.courseId}`}>
				<Image
					src={course?.courseBanner}
					width={300}
					height={200}
					alt="courseBanner"
					className="w-full h-[200px] object-cover cursor-pointer rounded-lg"
				/>
			</Link>
			<div className="p-3">
				<div className="flex font-medium justify-between items-center text-lg">
					<h2 className="line-clamp-1">
						{course?.courseOutputByAI?.courseName}
					</h2>

					{edit && (
						<DropdownOption
							handleEditCourse={() =>
								router.push(`/create-course/${course.courseId}`)
							}
							handleDeleteCourse={() => deleteCourse(course.courseId)}
						>
							<EllipsisVerticalIcon className="h-8 w-8 bg-blue-600 text-white rounded-full p-1" />
						</DropdownOption>
					)}
				</div>
				<div className="flex justify-between items-center mt-3">
					<p className="text-sm text-gray-400 mb-1">
						{course?.courseOutputByAI?.category}
					</p>
					{edit &&
						(course?.publish ? (
							<p className="text-green-500 font-bold">Published</p>
						) : (
							<p className="text-red-500 font-bold">Draft</p>
						))}
				</div>
				<div className="flex items-center justify-between mt-3">
					<h2 className="flex gap-2 text-sm items-center text-center p-1 bg-myPrimary/30 text-primary rounded-lg text-nowrap">
						{course?.courseOutputByAI?.numOfChapters} Chapters
					</h2>
					<h2 className="text-sm p-1 bg-myPrimary/30 rounded-lg">
						{course?.courseOutputByAI?.level}
					</h2>
				</div>
				<div className="flex items-center mt-3">
					<Image
						src={`${course?.userProfileImage}`}
						alt="author"
						width={35}
						height={35}
						className="rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
