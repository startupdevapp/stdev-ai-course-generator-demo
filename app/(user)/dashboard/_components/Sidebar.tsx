'use client';
import { MAX_COURSE_FREE, SidebarDashboardItems } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import SidebarItem from './SidebarItem';
import { usePathname } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';

const Sidebar = () => {
	const pathname = usePathname();

	const { userCourseList } = useContext(UserCourseListContext);
	return (
		<div className="fixed h-full md:w-64 shadow-md p-5">
			<div className="flex flex-row items-center w-full ">
				<Link href={'/'} className="flex items-center justify-between">
					<Image
						src={'/logo_2.svg'}
						alt="STDEV AI Course Generator"
						width={60}
						height={60}
					/>
					<p className="text-myPrimary font-semibold ml-3 text-4xl">AI</p>
				</Link>
			</div>
			<hr />
			<div className="flex flex-col gap-2 mt-5">
				{SidebarDashboardItems.map((item, index) => (
					<SidebarItem
						key={index}
						label={item.label}
						link={item.link}
						Icon={item.icon}
						pathname={pathname}
					/>
				))}
			</div>
			<div className="absolute bottom-20 w-[80%]">
				<Progress
					value={(Number(userCourseList?.length) / MAX_COURSE_FREE) * 100}
				/>
				<h2 className="my-3">
					<strong className="font-bold text-myPrimary text-lg">
						{userCourseList?.length}
					</strong>{' '}
					/{' '}
					<strong className="font-bold text-black text-lg">
						{MAX_COURSE_FREE}
					</strong>{' '}
					courses created
				</h2>
				<h2 className="text-xs text-gray-500">
					Upgrade your plan for unlimited course generate
				</h2>
			</div>
		</div>
	);
};

export default Sidebar;
