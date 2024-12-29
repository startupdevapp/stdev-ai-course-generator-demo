'use client';

import { useState } from 'react';
import { Course } from '@/types';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';

export default function UserLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [userCourseList, setUserCourseList] = useState<Course[]>([]);

	return (
		<UserCourseListContext.Provider
			value={{ userCourseList, setUserCourseList }}
		>
			<div>{children}</div>
		</UserCourseListContext.Provider>
	);
}
