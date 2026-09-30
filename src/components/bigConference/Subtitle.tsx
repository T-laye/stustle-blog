import React, { FC } from "react";
import { GrowBar } from "./motion";

interface SubtitleProps {
	text: string;
	style?: string;
}

const Subtitle: FC<SubtitleProps> = ({ text, style }) => {
	return (
		<div className={`${style} flex flex-col items-center`}>
			<GrowBar className="rounded-md bg-primary w-[110px] h-[7px]" />
			<h2 className="text-2xl md:text-[32px]  my-[15px] lg:my-[30px] text-center uppercase">
				{text}
			</h2>
		</div>
	);
};

export default Subtitle;
