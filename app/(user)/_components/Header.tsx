import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
	return (
		<div className="flex justify-between items-center p-5 shadow-sm">
			<Link href={'/'}>
				<Image src="/logo_2.svg" alt="logo" width={100} height={100} />
			</Link>
			<UserButton />
		</div>
	);
};

export default Header;
