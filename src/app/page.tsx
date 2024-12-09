import About from "@/components/landing/About";
import Faq from "@/components/landing/Faq";
import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
import Review from "@/components/landing/Review";
import Services from "@/components/landing/Services";
import Steps from "@/components/landing/Steps";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Steps />
      <Review />
      <Faq />
      <Partners />
    </div>
  );
}
