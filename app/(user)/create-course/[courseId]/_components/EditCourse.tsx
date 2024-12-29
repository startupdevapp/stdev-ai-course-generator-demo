import { Course } from '@/types';

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { SquarePen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useEffect, useState, useTransition } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { updateCourse } from '@/app/(user)/actions/updateCourse';

interface EditCourseProps {
	course: Course;
}

const EditCourse = ({ course }: EditCourseProps) => {
	const [courseName, setCourseName] = useState(
		course?.courseOutputByAI?.courseName
	);

	const [description, setDescription] = useState(
		course?.courseOutputByAI?.description
	);

	const [isPending, startTransition] = useTransition();

	const { user } = useUser();

	const email = user?.primaryEmailAddress?.emailAddress;

	useEffect(() => {
		setCourseName(course?.courseOutputByAI?.courseName);
		setDescription(course?.courseOutputByAI?.description);
	}, [course]);

	const handleInputUpdate = (fieldName: string, value: string) => {
		if (fieldName === 'courseName') {
			setCourseName(value);
		} else {
			setDescription(value);
		}
	};

	const onUpdateCourse = () => {
		startTransition(async () => {
			if (!email) return;

			if (course) {
				course.courseOutputByAI.courseName = courseName;
				course.courseOutputByAI.description = description;
			}

			try {
				await updateCourse(course, email);
			} catch (error) {
				console.log(error);
			}
		});
	};

	return (
		<div className="ml-3">
			<Dialog>
				<DialogTrigger>
					<SquarePen className="min-h-8 min-w-8 text-blue-800 hover:text-blue-800/60" />
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Edit Course Name & Description</DialogTitle>
						<div>
							<div className="mt-5 gap-3">
								<label className="font-bold">Course Name</label>
								<Input
									placeholder="Course Name"
									onChange={(e) =>
										handleInputUpdate('courseName', e.target.value.trim())
									}
									defaultValue={courseName}
								/>
							</div>
							<div className="mt-5">
								<label className="font-bold">Description</label>
								<Textarea
									className="h-40"
									placeholder="About your Course"
									onChange={(e) =>
										handleInputUpdate('description', e.target.value.trim())
									}
									defaultValue={description}
								/>
							</div>
						</div>
					</DialogHeader>
					<DialogFooter className="sm:justify-start">
						<DialogClose asChild>
							<Button
								type="button"
								className="bg-myPrimary hover:bg-myPrimary/80"
								onClick={onUpdateCourse}
								disabled={isPending}
							>
								Update
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default EditCourse;
