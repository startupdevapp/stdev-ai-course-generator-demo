import { LucideIcon } from 'lucide-react';
import React from 'react';

interface CourseDetailItemProps {
	label: string;
	content: string | number;
	Icon: LucideIcon;
}

const CourseDetailItem = ({ label, content, Icon }: CourseDetailItemProps) => {
	return (
		<div className="flex gap-2 items-center">
			<div>
				<Icon className="h-10 w-10 text-myPrimary" />
			</div>
			<div>
				<h2 className="text-xl text-gray-500">{label}</h2>
				<h2 className="font-medium text-lg">{content}</h2>
			</div>
		</div>
	);
};

export default CourseDetailItem;
