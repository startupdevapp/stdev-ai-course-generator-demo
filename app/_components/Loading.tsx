import React from 'react';

const Loading = () => {
	return [1, 2, 3, 4, 5].map((_, index) => (
		<div
			key={index}
			className="w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[270px]"
		/>
	));
};

export default Loading;
