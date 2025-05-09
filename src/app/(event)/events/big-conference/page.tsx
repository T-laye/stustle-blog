import About from "@/components/bigConference/About";
import Faq from "@/components/bigConference/Faq";
import Hero from "@/components/bigConference/Hero";
import Partners from "@/components/bigConference/Partners";
import Speakers from "@/components/bigConference/Speakers";
import WhatElse from "@/components/bigConference/WhatElse";
import React from "react";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Speakers />
      <WhatElse />
      <Faq />
      <Partners />
    </>
  );
}
