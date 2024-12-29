import Footer from '../_components/Footer';
import Header from '../_components/Header';

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="">
			<div className="sticky top-0 z-50 w-full">
				<Header />
			</div>
			{children}
			<div className="p-10 mt-20 bg-gray-50">
				<Footer />
			</div>
		</div>
	);
}
