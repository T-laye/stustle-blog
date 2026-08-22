/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoCheckmarkSharp, IoPersonOutline } from "react-icons/io5";
import { useImageStore } from "../../store/variables";

const AttendingInstaPost = () => {
	const { name, previewUrl } = useImageStore();
	const displayName = name.trim() || "Your Name";

	return (
		<div className="h-auto max-w-[420px] flex justify-center relative mx-auto">
			<div
				className="w-full aspect-square relative isolate overflow-hidden rounded-[9%]"
				id="attending-instagram-post-preview"
				style={{
					background: "linear-gradient(165deg, #2A1607 0%, #150B03 100%)",
				}}
			>
				{/* Soft glow accents */}
				<div
					className="absolute -top-[20%] -right-[20%] h-[60%] w-[60%] rounded-full"
					style={{
						background:
							"radial-gradient(circle, rgba(226,149,7,0.35) 0%, rgba(226,149,7,0) 70%)",
					}}
				/>
				<div
					className="absolute -bottom-[15%] -left-[15%] h-[50%] w-[50%] rounded-full"
					style={{
						background:
							"radial-gradient(circle, rgba(226,149,7,0.22) 0%, rgba(226,149,7,0) 70%)",
					}}
				/>

				{/* Photo badge */}
				<div className="absolute left-1/2 top-[6%] h-[40%] w-[40%] -translate-x-1/2">
					{/* Gradient ring */}
					<div
						className="absolute inset-0 rounded-full"
						style={{
							background: "linear-gradient(135deg, #E29507, #FFD98A)",
						}}
					/>
					{/* White gap */}
					<div className="absolute inset-[3%] rounded-full bg-[#FFFAF0]" />
					{/* Photo */}
					<div className="absolute inset-[5%] rounded-full overflow-hidden bg-[#3a2412]">
						{previewUrl ? (
							<img
								src={previewUrl}
								alt="Selected profile"
								crossOrigin="anonymous"
								className="h-full w-full object-cover object-center"
							/>
						) : (
							<div className="h-full w-full flex items-center justify-center">
								<IoPersonOutline className="text-white/40 text-5xl" />
							</div>
						)}
					</div>

					{/* Confirmed badge */}
					<div className="absolute bottom-[2%] right-[2%] h-[18%] w-[18%] min-w-[26px] min-h-[26px] rounded-full bg-primary border-[3px] border-[#150B03] flex items-center justify-center">
						<IoCheckmarkSharp className="text-white text-xs sm:text-sm" />
					</div>
				</div>

				{/* Eyebrow label */}
				<div className="absolute left-0 right-0 top-[49%] flex justify-center">
					<span className="rounded-full border border-primary/50 px-3 py-[3px] text-[9px] sm:text-[11px] tracking-[0.18em] text-primary font-semibold">
						REGISTERED ATTENDEE
					</span>
				</div>

				{/* Name */}
				<p className="absolute left-0 right-0 top-[55%] text-center px-[8%] text-white font-bold text-lg sm:text-2xl leading-tight truncate">
					{displayName}
				</p>

				{/* Connector */}
				<p className="absolute left-0 right-0 top-[64%] text-center text-white/50 text-xs sm:text-sm">
					is attending
				</p>

				{/* Event title (two fixed lines, avoids relying on text wrap) */}
				<p className="absolute left-0 right-0 top-[69%] text-center px-[6%] text-primary font-extrabold text-lg sm:text-2xl leading-tight">
					B.I.G Conference
				</p>
				<p className="absolute left-0 right-0 top-[78%] text-center px-[6%] text-primary font-extrabold text-lg sm:text-2xl leading-tight">
					2026
				</p>

				{/* Divider */}
				<div className="absolute left-1/2 top-[89%] h-px w-[55%] -translate-x-1/2 bg-white/15" />

				{/* Footer */}
				<div className="absolute left-0 right-0 top-[92%] px-[6%] flex items-center justify-between gap-2">
					<span className="text-white/60 text-[8px] sm:text-[11px] whitespace-nowrap">
						Aug 21&ndash;22 &bull; Delta State
					</span>

					<span className="flex items-center gap-1 text-white/60">
						<FaInstagram className="text-[10px] sm:text-sm shrink-0" />
						<span className="text-[8px] sm:text-[11px] whitespace-nowrap">
							bigconferenceofficial
						</span>
					</span>

					<span className="text-primary font-bold text-[9px] sm:text-sm whitespace-nowrap">
						Stustle.
					</span>
				</div>
			</div>
		</div>
	);
};

export default AttendingInstaPost;
