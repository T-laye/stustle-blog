import type { Metadata } from "next";
import Hero from "@/components/bigConference/Hero";
import About from "../../../../components/bigConference/About";
import Experience from "../../../../components/bigConference/Experience";
import Highlights from "../../../../components/bigConference/Highlights";
import PitchWinners from "../../../../components/bigConference/PitchWinners";
import Impact from "../../../../components/bigConference/Impact";
import Voices from "../../../../components/bigConference/Voices";
import Speakers from "../../../../components/bigConference/Speakers";
import Partners2026 from "../../../../components/bigConference/Partners2026";
import AfterBig from "../../../../components/bigConference/AfterBig";
import KeepGrowing from "../../../../components/bigConference/KeepGrowing";
import NextEdition from "../../../../components/bigConference/NextEdition";
import BigHeader from "../../../../components/bigConference/BigHeader";
// Pre-event sections, hidden now that B.I.G. 2026 is over
// import CountDown from "../../../../components/bigConference/CountDown";
// import Schedule from "../../../../components/bigConference/Schedule";
// import WhatElse from "../../../../components/bigConference/WhatElse";
// import Tickets from "../../../../components/bigConference/Tickets";
// import Partners from "../../../../components/bigConference/Partners";
// import Faq from "../../../../components/bigConference/Faq";
// import Review from "../../../../components/bigConference/Review";
// 2025 sections, replaced by Highlights and Partners2026
// import Gallery from "../../../../components/bigConference/Gallery";
// import Sponsors from "../../../../components/bigConference/Sponsors";

const title = "B.I.G. Conference 2026 · Small Steps. Steady Growth.";
const description =
	"B.I.G. 2026 is over, but the journey continues. See the highlights, read the 2026 Impact Report and join the waitlist for B.I.G. 2027.";
// www.stustle.com/events/big-conference redirects here (see middleware.ts)
const pageUrl = "https://big.stustle.com";
// Absolute so crawlers always fetch it from the main domain
const ogImage = {
	url: "https://www.stustle.com/bigConf/2026/og-image.jpg",
	width: 1200,
	height: 630,
	alt: "A speaker on the B.I.G. Conference 2026 stage in front of the Kaizen screen",
};

export const metadata: Metadata = {
	title: { absolute: title },
	description,
	alternates: { canonical: pageUrl },
	openGraph: {
		type: "website",
		siteName: "Stustle",
		url: pageUrl,
		title,
		description,
		images: [ogImage],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: [ogImage],
	},
};

export default function Page() {
	return (
		<>
			<BigHeader />
			<Hero />
			<About />
			<Experience />
			<Highlights />
			<PitchWinners />
			<Impact />
			<Voices />
			<Speakers />
			<Partners2026 />
			<AfterBig />
			<KeepGrowing />
			<NextEdition />
		</>
	);
}
