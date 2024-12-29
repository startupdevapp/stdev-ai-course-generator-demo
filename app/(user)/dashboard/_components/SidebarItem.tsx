import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface SidebarItemProps {
	label: string;
	link: string;
	Icon: LucideIcon;
	pathname?: string;
}

const SidebarItem = ({ label, link, Icon, pathname }: SidebarItemProps) => {
	return (
		<Link
			href={link}
			className="gap-5
    "
		>
			<div
				className={`flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-100 hover:text-black cursor-pointer rounded-lg ${
					pathname === link ? 'bg-gray-100 text-black' : ''
				}`}
			>
				<Icon size={24} />
				<p>{label}</p>
			</div>
		</Link>
	);
};

export default SidebarItem;
