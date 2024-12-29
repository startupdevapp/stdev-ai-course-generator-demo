import {
	CodeXml,
	Landmark,
	LayoutDashboard,
	LayoutDashboardIcon,
	ShieldPlusIcon,
	Sparkle,
	TelescopeIcon,
} from 'lucide-react';

export const NavMenuItems = [
	{
		href: '/courses',
		label: 'Courses',
		value: 'courses',
	},
	{
		href: '/docs',
		label: 'Docs',
		value: 'docs',
	},
	{
		href: '/about',
		label: 'About',
		value: 'about',
	},
];

export const CategoryItems = [
	{ label: 'IT', value: 'it', href: '/it' },
	{ label: 'Finance', value: 'finance', href: 'finance' },
	{ label: 'Accounting', value: 'accounting', href: 'accounting' },
];

export const SocialAccounts = [
	{
		href: 'https://facebook.com',
		label: 'Facebook',
	},
	{
		href: 'https://instagram.com',
		label: 'Instagram',
	},
	{ href: 'https://tiktok.com', label: 'Tiktok' },
	{ href: 'https://youtube.com', label: 'Youtube' },
];

export const SidebarDashboardItems = [
	{
		label: 'Dashboard',
		value: 'dashboard',
		link: '/dashboard',
		icon: LayoutDashboardIcon,
	},
	{
		label: 'Explore',
		value: 'explore',
		link: '/dashboard/explore',
		icon: TelescopeIcon,
	},
	{
		label: 'Upgrade',
		value: 'upgrade',
		link: '/dashboard/upgrade',
		icon: ShieldPlusIcon,
	},
];

export const LanguageItems = [
	{ label: 'English', value: 'en' },
	{ label: 'Vietnamese', value: 'vn' },
];

// export const CategoryItems = [
// 	{ label: 'IT', value: 'it', icon: GlobeLockIcon },
// 	{ label: 'Finance', value: 'finance', icon: BadgeDollarSignIcon },
// 	{ label: 'Accounting', value: 'accounting', icon: CalculatorIcon },
// ];

export const LevelItems = [
	{ label: 'Beginner', value: 'beginner' },
	{ label: 'Intermediate', value: 'intermediate' },
	{ label: 'Advanced', value: 'advanced' },
];

export const DurationItems = [
	{ label: '1 Hour', value: '1 hour' },
	{ label: '2 Hours', value: '2 hours' },
	{ label: 'More than 3 hours', value: 'more than 3 hours' },
];

export const VideoItems = [
	{ label: 'Yes', value: 'yes' },
	{ label: 'No', value: 'no' },
];

export const SidebarCoursesItems = [
	{ label: 'All Courses', value: '', icon: LayoutDashboard },
	{ label: 'IT', value: 'it', icon: CodeXml },
	{ label: 'Finance', value: 'finance', icon: Landmark },
	{ label: 'Accounting', value: 'accounting', icon: Sparkle },
];

export const MAX_COURSE_FREE = 5;
