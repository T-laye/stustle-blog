import Image from "next/image";
import React from "react";
import { IoCameraOutline } from "react-icons/io5";

interface PhotoSlotProps {
	src: string;
	alt: string;
	sizes: string;
	priority?: boolean;
	dark?: boolean;
	className?: string;
}

// Fills its (relative) parent with the photo, or a labelled placeholder until a src is set
export default function PhotoSlot({
	src,
	alt,
	sizes,
	priority,
	dark,
	className = "",
}: PhotoSlotProps) {
	if (src) {
		return (
			<Image
				src={src}
				alt={alt}
				fill
				sizes={sizes}
				priority={priority}
				className={`object-cover ${className}`}
			/>
		);
	}

	return (
		<div
			className={`absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center ${
				dark
					? "bg-gradient-to-br from-[#2b1c00] via-[#191000] to-[#3a2600] text-white/30"
					: "bg-gradient-to-br from-primary/15 via-primary/5 to-primary/20 text-primary-100/60"
			} ${className}`}
		>
			<IoCameraOutline className="text-3xl" />
			<span className="text-xs font-medium tracking-wide max-w-[220px]">
				{alt}
			</span>
		</div>
	);
}
