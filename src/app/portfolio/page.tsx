import React from "react";
// import Overview from "../../components/portfolio/Overview";
import Projects from "../../components/portfolio/Projects";
import Header from "../../components/Header";

const page = () => {
  return (
		<div className="pt-[90px] pb-20 container px-4">
			<Header />
			{/* <Overview /> */}
			<Projects />
		</div>
	);
};

export default page;
