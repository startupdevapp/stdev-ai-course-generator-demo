import { Course } from '@/types';
import { createContext } from 'react';

type UserCourseList = {
	userCourseList: Course[];
	setUserCourseList: (course: Course[]) => void;
};

export const UserCourseListContext = createContext<UserCourseList>({
	userCourseList: [],
	setUserCourseList: () => {},
});
