import React, { FC } from "react";

interface SubtitleProps {
	text: string;
	style?: string;
}

const Subtitle: FC<SubtitleProps> = ({ text, style }) => {
	return (
		<div className={`${style} flex flex-col items-center`}>
			<div className="rounded-md bg-primary w-[110px] h-[7px]"></div>
			<h2 className="text-2xl md:text-[32px]  my-[15px] lg:my-[30px] text-center uppercase">{text}</h2>
		</div>
	);
};

export default Subtitle;
