import React from 'react';
import AddCourse from './_components/AddCourse';
import UserCourses from './_components/UserCourses';

const DashboardPage = () => {
	return (
		<div>
			<AddCourse />
			<UserCourses />
		</div>
	);
};

export default DashboardPage;
