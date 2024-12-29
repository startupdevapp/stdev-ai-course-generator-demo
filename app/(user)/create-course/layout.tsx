'use client';

import Header from '../_components/Header';

export default function CreateCourseLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Header />
			<div className="mt-10">{children}</div>
		</div>
	);
}
