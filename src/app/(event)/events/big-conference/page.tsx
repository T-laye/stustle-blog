import Hero from "@/components/bigConference/Hero";
import About from "../../../../components/bigConference/About";
import WhatElse from "../../../../components/bigConference/WhatElse";
// import Speakers from "../../../../components/bigConference/Speakers";
import Sponsors from "../../../../components/bigConference/Sponsors";
import Faq from "../../../../components/bigConference/Faq";
import CountDown from "../../../../components/bigConference/CountDown";
// import GenerateImage from "../../../../components/bigConference/GenerateImage";
import Partners from "../../../../components/bigConference/Partners";
import Gallery from "../../../../components/bigConference/Gallery";
import Review from "../../../../components/bigConference/Review";
import Tickets from "../../../../components/bigConference/Tickets";
import BigHeader from "../../../../components/bigConference/BigHeader";

export default function Page() {
	return (
		<>
			<BigHeader />
			<Hero />
			<CountDown />
			<About />
			<WhatElse />
			{/* <Speakers /> */}
			<Tickets />
			<Sponsors />
			{/* <GenerateImage /> */}
			<Partners />
			<Faq />
			<Gallery />
			<Review />
		</>
	);
}
