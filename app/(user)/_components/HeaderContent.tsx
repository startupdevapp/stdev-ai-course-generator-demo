import React from 'react';

interface HeaderContentProps {
	leftsideTitle?: string;
	rightsideTitle?: string;
	subTitle?: string;
}

const HeaderContent = ({
	leftsideTitle,
	rightsideTitle,
	subTitle,
}: HeaderContentProps) => {
	return (
		<div className="flex justify-between items-center ">
			<div>
				<h1 className="text-5xl">
					<strong className="text-myPrimary">{leftsideTitle}</strong> {''}
					<strong>{rightsideTitle}</strong>
				</h1>
				<h2 className="text-lg font-bold">{subTitle}</h2>
			</div>
		</div>
	);
};

export default HeaderContent;
