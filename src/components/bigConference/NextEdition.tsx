import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Subtitle from "./Subtitle";
import CtaLink from "./CtaLink";
import { SOCIAL_LINKS, WAITLIST_URL } from "./links";

const socials = [
	{ name: "Instagram", href: SOCIAL_LINKS.instagram, icon: <FaInstagram /> },
	{ name: "YouTube", href: SOCIAL_LINKS.youtube, icon: <FaYoutube /> },
	{ name: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: <FaLinkedin /> },
	{ name: "WhatsApp", href: SOCIAL_LINKS.whatsapp, icon: <FaWhatsapp /> },
];

export default function NextEdition() {
	return (
		<section id="big-2027" className="px-4 sm:px-8 pt-10 sm:pt-20 pb-20">
			<div className="container max-w-4xl mx-auto text-center">
				<Subtitle text="B.I.G. 2027" />
				<p className="text-xl sm:text-2xl font-semibold">
					We are already thinking about the next one.
				</p>
				<p className="sm:text-lg leading-relaxed mt-4">
					The next edition will build on what we learned, improve what can be
					better and create an even stronger experience for young people.
				</p>
				<p className="font-semibold text-lg mt-8">
					Want to be the first to know when B.I.G. 2027 opens?
				</p>
				<div className="mt-4 max-w-xs mx-auto">
					<CtaLink href={WAITLIST_URL}>Join the 2027 Waitlist</CtaLink>
				</div>

				<div className="mt-20 pt-10 border-t border-primary/20">
					<p className="text-2xl font-extrabold uppercase">B.I.G. Conference</p>
					<p className="text-primary font-medium mt-1">A Stustle initiative</p>
					<p className="text-foreground/70 mt-3">
						Helping young people move from exposure to action, and from learning
						to opportunity.
					</p>
					<div className="flex justify-center gap-5 mt-6 text-2xl text-primary">
						{socials.map(({ name, href, icon }) => (
							<a
								key={name}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={name}
								className="hover:scale-110 duration-150"
							>
								{icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
