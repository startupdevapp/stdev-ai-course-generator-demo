'use client';

import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import { Button } from '@/components/ui/button';
import { MAX_COURSE_FREE } from '@/constants';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useContext } from 'react';

const AddCourse = () => {
	const { user } = useUser();

	const { userCourseList } = useContext(UserCourseListContext);

	return (
		<div className="flex items-center justify-between gap-5">
			<div>
				<h2 className="text-3xl">
					Hello,<span className="font-bold">{user?.fullName}</span>
				</h2>
				<p className="text-sm">
					Create new course with AI, Share with your friends
				</p>
			</div>
			{userCourseList?.length < MAX_COURSE_FREE ? (
				<Link href={'/create-course'}>
					<Button className="bg-myPrimary hover:bg-myPrimary/80">
						+ Create AI Course
					</Button>
				</Link>
			) : (
				<Link href={'/dashboard/upgrade'}>
					<Button className="bg-blue-500 hover:bg-blue-500/80">
						+ Upgrade
					</Button>
				</Link>
			)}
		</div>
	);
};

export default AddCourse;
