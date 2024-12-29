'use client';

import { Button } from '@/components/ui/button';

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SHEET_SIDES = ['left'] as const;

const MobileNavbar = () => {
	return (
		<div className="grid grid-cols-2 gap-2">
			{SHEET_SIDES.map((side) => (
				<Sheet key={side}>
					<SheetTrigger asChild>
						<Button variant="outline">
							<Menu size={24} />
						</Button>
					</SheetTrigger>
					<SheetContent side={side} className="w-[200px]">
						<SheetTitle>
							<Link href={'/'}>
								<Image src={'/logo_2.svg'} alt="logo" width={40} height={40} />
							</Link>
						</SheetTitle>
						<hr className="m-3" />
						<NavigationMenu>
							<NavigationMenuList className="flex flex-col">
								<NavigationMenuItem>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										href={'/courses'}
									>
										Courses
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										href={'/docs'}
									>
										Docs
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										href={'/about'}
									>
										About
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</SheetContent>
				</Sheet>
			))}
		</div>
	);
};

export default MobileNavbar;
