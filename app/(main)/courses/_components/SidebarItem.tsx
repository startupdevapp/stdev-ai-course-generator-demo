import { LucideIcon } from 'lucide-react';
import React from 'react';

interface SidebarItemProps {
	label: string;
	Icon: LucideIcon;
	category: string;
	currentCategory: string;
	clickHandler?: () => void;
}

const SidebarItem = ({
	label,
	Icon,
	category,
	currentCategory,
	clickHandler,
}: SidebarItemProps) => {
	return (
		<div
			onClick={clickHandler}
			className={` flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-100 cursor-pointer hover:text-black rounded-lg mb-3 ${
				category === currentCategory ? 'bg-gray-100 text-black' : ''
			}`}
		>
			<Icon />
			<h2>{label}</h2>
		</div>
	);
};

export default SidebarItem;
