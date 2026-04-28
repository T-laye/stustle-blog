import Hero from "@/components/bigConference/Hero";
import About from "../../../../components/bigConference/About";
import WhatElse from "../../../../components/bigConference/WhatElse";
import Speakers from "../../../../components/bigConference/Speakers";
import Sponsors from "../../../../components/bigConference/Sponsors";
import Faq from "../../../../components/bigConference/Faq";
import CountDown from "../../../../components/bigConference/CountDown";
import GenerateImage from "../../../../components/bigConference/GenerateImage";
import Partners from "../../../../components/bigConference/Partners";
import Gallery from "../../../../components/bigConference/Gallery";
import Review from "../../../../components/bigConference/Review";

export default function Page() {
	return (
		<>
			<Hero />
			<CountDown />
			<About />
			<WhatElse />
			<Speakers />
			<Sponsors />
			<GenerateImage />
			<Faq />
			<Partners />
      <Gallery />
      <Review />
		</>
	);
}
