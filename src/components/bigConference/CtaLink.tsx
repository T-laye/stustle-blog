import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface CtaLinkProps {
	href: string;
	children: React.ReactNode;
	style?: "primary" | "secondary" | "reverse";
}

// Link styled like ui/Button, for CTAs that navigate instead of running a handler
export default function CtaLink({
	href,
	children,
	style = "primary",
}: CtaLinkProps) {
	const external = href.startsWith("http");

	return (
		<Link
			href={href}
			target={external ? "_blank" : undefined}
			rel={external ? "noopener noreferrer" : undefined}
			className={`btn whitespace-nowrap btns ${
				style === "primary" ? "bg-primary text-white" : ""
			} ${style === "secondary" ? "text-primary border border-primary" : ""} ${
				style === "reverse" ? "bg-white text-primary" : ""
			}`}
		>
			<span className="label flex items-center gap-2">
				<span>{children}</span>
				<FaRegArrowAltCircleRight />
			</span>
		</Link>
	);
}
