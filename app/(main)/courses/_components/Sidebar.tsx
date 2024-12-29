'use client';

import { SidebarCoursesItems } from '@/constants';
import React from 'react';
import SidebarItem from './SidebarItem';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Sidebar = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const currentCategory = searchParams.get('category') || '';

	const createCatUrl = (category: string) => {
		const params = new URLSearchParams(searchParams);
		params.set('category', category.toString());
		router.push(`${pathname}?${params.toString()}`);
	};
	return (
		<div className="fixed h-full md:w-64 shadow-md p-5">
			{SidebarCoursesItems.map((item, index) => (
				<SidebarItem
					key={index}
					label={item.label}
					Icon={item.icon}
					category={item.value}
					currentCategory={currentCategory}
					clickHandler={() => createCatUrl(item.value || '')}
				/>
			))}
		</div>
	);
};

export default Sidebar;
