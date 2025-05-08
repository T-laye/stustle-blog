import About from "@/components/bigConference/About";
import Faq from "@/components/bigConference/Faq";
import Hero from "@/components/bigConference/Hero";
import Partners from "@/components/bigConference/Partners";
import WhatElse from "@/components/bigConference/WhatElse";
import React from "react";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <WhatElse />
      <Faq />
      <Partners />
    </>
  );
}
