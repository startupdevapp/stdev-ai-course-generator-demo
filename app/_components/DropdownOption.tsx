'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface DropdownOptionProps {
	children: React.ReactNode;
	handleDeleteCourse?: () => void;
	handleEditCourse?: () => void;
}

const DropdownOption = ({
	children,
	handleDeleteCourse,
	handleEditCourse,
}: DropdownOptionProps) => {
	const [openAlert, setOpenAlert] = useState(false);

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger>{children}</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={handleEditCourse}
					>
						<Edit size={20} />
						Edit
					</DropdownMenuItem>
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={() => setOpenAlert(!openAlert)}
					>
						<Trash2 size={20} />
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<AlertDialog
				open={openAlert}
				onOpenChange={() => setOpenAlert(!openAlert)}
			>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction
							className="bg-red-600 hover:bg-red-600/80"
							onClick={handleDeleteCourse}
						>
							Continue
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

export default DropdownOption;
