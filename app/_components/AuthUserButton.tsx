'use client';

import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const AuthUserButton = () => {
	const { isSignedIn } = useUser();

	return (
		<div>
			{isSignedIn ? (
				<div className="flex items-center">
					<Link href={'/dashboard'} className="mr-3">
						<Button className="bg-myPrimary hover:bg-myPrimary/80">
							Dashboard
						</Button>
					</Link>
					<UserButton />
				</div>
			) : (
				<div className="flex items-center">
					<Link href={'/dashboard'} className="mr-3">
						<Button className="bg-myPrimary hover:bg-myPrimary/80">
							Get Started
						</Button>
					</Link>
					<Link href={'/sign-in'}>
						<Button className="bg-indigo-600 hover:bg-indigo-600/80">
							Sign In
						</Button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default AuthUserButton;
