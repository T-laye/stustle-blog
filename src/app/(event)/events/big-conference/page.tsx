import Hero from "@/components/bigConference/Hero";
import About from "../../../../components/bigConference/About";
import WhatElse from "../../../../components/bigConference/WhatElse";
import Speakers from "../../../../components/bigConference/Speakers";
import Sponsors from "../../../../components/bigConference/Sponsors";
import Faq from "../../../../components/bigConference/Faq";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      {/* <GenerateImage /> */}
      <WhatElse />
      <Speakers />
      <Sponsors />
      {/* <Partners /> */}
      <Faq />
    </>
  );
}
