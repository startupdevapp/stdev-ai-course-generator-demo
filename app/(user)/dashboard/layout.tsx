'use client';

import Sidebar from './_components/Sidebar';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="">
			<div className="hidden md:block md:w-64">
				<Sidebar />
			</div>
			<div className="md:ml-64 p-10">{children}</div>
		</div>
	);
}
