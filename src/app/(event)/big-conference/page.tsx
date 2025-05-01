import About from "@/components/bigConference/About";
import EventHero from "@/components/bigConference/EventHero";
import Faq from "@/components/bigConference/Faq";
import Partners from "@/components/bigConference/Partners";
import WhatElse from "@/components/bigConference/WhatElse";
import React from "react";

export default function Page() {
  return (
    <>
      <EventHero />
      <About />
      <WhatElse />
      <Faq />
      <Partners />
    </>
  );
}
