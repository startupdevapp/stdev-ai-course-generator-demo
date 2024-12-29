import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavbarMenu from './NavbarMenu';
import AuthUserButton from './AuthUserButton';
import MobileNavbar from './MobileNavbar';

const Header = () => {
	return (
		<div className="flex justify-between items-center shadow-sm py-5 px-10">
			<div className="hidden md:block">
				<Link href={'/'}>
					<Image
						src="/logo_2.svg"
						alt="AI Course Generator"
						width={100}
						height={100}
					/>
				</Link>
			</div>
			<div className="md:hidden">
				<MobileNavbar />
			</div>
			<div className="flex items-center">
				<div className="mr-5 hidden md:block">
					<NavbarMenu />
				</div>
				<div>
					<AuthUserButton />
				</div>
			</div>
		</div>
	);
};

export default Header;
