/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useImageStore } from "../../store/variables";
import { FaUserCircle } from "react-icons/fa";

const VolunteerInstaPost = () => {
	const { name, previewUrl } = useImageStore();

	return (
		<div className="h-auto max-w-[360px] flex justify-center relative mx-auto lg:scale-110 instagram-post-preview">
			{/* Background Instagram Post */}
			<div
				className="w-full max-w-[500px] aspect-square relative isolate overflow-hidden"
				id="volunteer-instagram-post-preview"
			>
				<img
					className="relative z-20 h-full w-full object-center object-contain"
					src="/bigConf/dev.png"
					alt="Instagram Post"
				/>

				{/* Overlay content - positioned absolutely within the image container */}
				<div className="absolute z-10 inset-x-10 inset-y-[100px] flex flex-col justify-center items-center text-center top-0">
					<div className="">
						<div className="mb-2">
							<div className="relative w-[170px] h-[170px] shrink-0 border-[4px] bg-gray-200 rounded-full mx-auto flex items-center justify-center overflow-hidden">
								{previewUrl ? (
									<div
										aria-label="Selected profile"
										className="absolute inset-0 bg-cover bg-top"
										role="img"
										style={{
											backgroundImage: `url("${previewUrl}")`,
										}}
									/>
								) : (
									<FaUserCircle className="text-9xl text-white" />
								)}
							</div>
						</div>
					</div>
				</div>
				<div
					className="absolute z-30 top-[43%] right-[18%] mt-[0.5px] flex h-[30px] w-[78px] items-center justify-center bg-white pl-2 text-[10px]"
					data-export-name-box
				>
					<span
						className="line-clamp-2 max-h-[24px] w-full whitespace-normal break-words leading-[11px] text-[#6c3303]"
						data-export-name-text
					>
						{!name
							? 'Enter Your Name'
							: name
									.split(" ")
									.filter(Boolean)
									.slice(0, 2)
									.map((part, index) => (
										<span
											key={index}
											className={`block ${index === 0 && "font-bold"} `}
										>
											{part}
										</span>
									))}
					</span>
				</div>
			</div>
		</div>
	);
};

export default VolunteerInstaPost;
