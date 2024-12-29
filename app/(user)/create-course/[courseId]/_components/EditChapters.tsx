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
	index: number;
}

const EditChapters = ({ course, index }: EditCourseProps) => {
	const [chapterName, setChapterName] = useState(
		course?.courseOutputByAI?.chapters[index]?.chapterName
	);
	const [about, setAbout] = useState(
		course?.courseOutputByAI?.chapters[index]?.about
	);
	const [duration, setDuration] = useState(
		course?.courseOutputByAI?.chapters[index]?.duration
	);

	const [isPending, startTransition] = useTransition();

	const { user } = useUser();

	const email = user?.primaryEmailAddress?.emailAddress;

	useEffect(() => {
		setChapterName(course?.courseOutputByAI?.chapters[index]?.chapterName);
		setAbout(course?.courseOutputByAI?.chapters[index]?.about);
		setDuration(course?.courseOutputByAI?.chapters[index]?.duration);
	}, [course, index]);

	const handleInputUpdate = (fieldName: string, value: string) => {
		if (fieldName === 'chapterName') {
			setChapterName(value);
		} else if (fieldName === 'about') {
			setAbout(value);
		} else {
			setDuration(value);
		}
	};

	const onUpdateCourse = () => {
		startTransition(async () => {
			if (!email) return;

			if (course) {
				course.courseOutputByAI.chapters[index].chapterName = chapterName;
				course.courseOutputByAI.chapters[index].about = about;
				course.courseOutputByAI.chapters[index].duration = duration;
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
					<SquarePen className="min-h-6 min-w-6 text-blue-800 hover:text-blue-800/60" />
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Edit Chapter</DialogTitle>
						<div>
							<div className="mt-5 gap-3">
								<label className="font-bold">Chapter Name</label>
								<Input
									placeholder="Chapter Name"
									onChange={(e) =>
										handleInputUpdate('chapterName', e.target.value.trim())
									}
									defaultValue={chapterName}
								/>
							</div>
							<div className="mt-5">
								<label className="font-bold">About</label>
								<Textarea
									className="h-40"
									placeholder="About your Chapter"
									onChange={(e) =>
										handleInputUpdate('about', e.target.value.trim())
									}
									defaultValue={about}
								/>
							</div>
							<div className="mt-5 gap-3">
								<label className="font-bold">Duration</label>
								<Input
									placeholder="Duration"
									onChange={(e) =>
										handleInputUpdate('duration', e.target.value.trim())
									}
									defaultValue={duration}
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

export default EditChapters;
