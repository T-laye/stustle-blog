import About from "@/components/landing/About";
import Faq from "@/components/landing/Faq";
import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
import Review from "@/components/landing/Review";
import Services from "@/components/landing/Services";
import Steps from "@/components/landing/Steps";
import Header from "../components/Header";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
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
