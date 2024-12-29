import Image from 'next/image';
import React from 'react';
import { CategoryItems, NavMenuItems, SocialAccounts } from '@/constants';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="grid md:grid-cols-2 items-center justify-between gap-14">
			<div className="grid-cols-1 gap-8 items-center justify-center">
				<div className="flex gap-5 items-center">
					<Image
						src={'/logo_2.svg'}
						alt="AI Course Generator"
						width={50}
						height={50}
					/>
					<h1>
						{' '}
						<strong className="text-myPrimary font-bold text-2xl">
							STDEV
						</strong>{' '}
						<strong className="text-mySecond font-bold text-2xl">
							AI COURSE GENERATOR
						</strong>
					</h1>
				</div>
				<p className="mt-5">
					Personalize learning by creating AI-powered courses and customizing
					learning paths to suit your goals and unique environment
				</p>
				<div className="mt-5 flex gap-5">
					<Image src={'/facebook.png'} alt="facebook" width={18} height={180} />
					<Image
						src={'/instagram.png'}
						alt="instagram"
						width={18}
						height={180}
					/>
					<Image src={'/tiktok.png'} alt="tiktok" width={18} height={180} />
					<Image src={'/youtube.png'} alt="youtube" width={18} height={180} />
				</div>
			</div>
			<div className="flex md:justify-end justify-center gap-10">
				<div className="flex flex-col gap-3">
					<span className="font-bold">Menu</span>
					{NavMenuItems.map((item, index) => (
						<Link href={item.href} key={index}>
							{item.label}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-3">
					<span className="font-bold">Categories</span>
					{CategoryItems.map((item, index) => (
						<Link href={item.href} key={index}>
							{item.label}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-3">
					<span className="font-bold">Social Accounts</span>
					{SocialAccounts.map((item, index) => (
						<Link href={item.href} key={index}>
							{item.label}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
