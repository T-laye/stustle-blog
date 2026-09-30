// Media + content for the B.I.G. 2026 recap page.
// Any empty `src` / `logo` / `photo` renders a labelled placeholder on the page.
// Drop files in /public/bigConf/2026/ and set the path, e.g. "/bigConf/2026/hero-1.jpg".
// Keep photos web-sized (~2000px wide, under ~500KB) — not the raw camera files.
// Also available in /bigConf/2026/ (numbers match the original IMG_xxxx files):
// big2026-0075, 0088, 0268, 0304, 0377, 0745, 0783

export interface Photo {
	src: string;
	alt: string;
	caption?: string;
}

export interface Partner {
	name: string;
	logo: string;
	// Tile colour behind the logo — match the logo's own background
	bg?: string;
	url?: string;
}

export interface Winner {
	name: string;
	business: string;
	blurb: string;
	photo: string;
}

export interface Testimonial {
	quote: string;
	name: string;
	role: string;
}

// Rotating hero background — landscape, wide crowd/stage shots work best
export const heroPhotos: Photo[] = [
	{
		src: "/bigConf/2026/big2026-0162.jpg",
		alt: "A packed audience at B.I.G. 2026",
	},
	{
		src: "/bigConf/2026/big2026-0481.jpg",
		alt: "A speaker on the B.I.G. 2026 stage in front of the audience",
	},
	{
		src: "/bigConf/2026/big2026-0180.jpg",
		alt: "An attendee asking a question from the audience",
	},
	{
		src: "/bigConf/2026/big2026-0622.jpg",
		alt: "Attendees exploring an exhibition stand",
	},
];

// Gallery preview — the first photo is shown large
export const highlightPhotos: Photo[] = [
	{
		src: "/bigConf/2026/big2026-0206.jpg",
		alt: "A speaker on stage in front of the Kaizen screen",
		caption: "Day 2 · Effurun, Delta State",
	},
	{
		src: "/bigConf/2026/big2026-0255.jpg",
		alt: "A panel conversation on the B.I.G. 2026 stage",
		caption: "Industry Leaders Roundtable",
	},
	{
		src: "/bigConf/2026/big2026-0663.jpg",
		alt: "A speaker sharing on stage",
		caption: "On the B.I.G. stage",
	},
	{
		src: "/bigConf/2026/big2026-0698.jpg",
		alt: "Two speakers in conversation on stage",
		caption: "Real conversations",
	},
	{
		src: "/bigConf/2026/big2026-0620.jpg",
		alt: "Attendees at the Tri-P Tech exhibition stand",
		caption: "Exhibitions & networking",
	},
	{
		src: "/bigConf/2026/big2026-0190.jpg",
		alt: "Two attendees smiling together in the audience",
		caption: "The B.I.G. community",
	},
];

const LOGOS = "/bigConf/2026/partners";

export const partners: Partner[] = [
	{ name: "19 Internationals", logo: `${LOGOS}/19-internationals.webp` },
	{ name: "Bito Naturals", logo: `${LOGOS}/bito-naturals.webp` },
	{ name: "Discover Delta", logo: `${LOGOS}/discover-delta.webp` },
	{
		name: "Dubri Timiyan Foundation",
		logo: `${LOGOS}/dubri-timiyan-foundation.webp`,
	},
	{
		name: "Futlink Hardwares",
		logo: `${LOGOS}/futlink-hardwares.webp`,
		bg: "#1a1a1a",
	},
	{ name: "Ingather", logo: `${LOGOS}/ingather.webp`, bg: "#000000" },
	{ name: "Josefshots Photography", logo: `${LOGOS}/josefshots.webp` },
	{ name: "LVIS Solutions", logo: `${LOGOS}/lvis-solutions.webp` },
	{ name: "MOD Education", logo: `${LOGOS}/mod-education.webp` },
	{ name: "Rume Visuals", logo: `${LOGOS}/rume-visuals.webp`, bg: "#000000" },
	{ name: "Skysenx Hub", logo: "/images/skysenx-logo.svg" },
	{ name: "Supa Records", logo: `${LOGOS}/supa-records.webp`, bg: "#030303" },
	{ name: "Tri-P Tech", logo: `${LOGOS}/tri-p-tech.webp` },
	{ name: "Weefa", logo: `${LOGOS}/weefa.webp`, bg: "#1a1a1a" },
];

export const pitchWinners: Winner[] = [
	{
		name: "[Winner name]",
		business: "[Business name]",
		blurb: "[One line on what the business does]",
		photo: "",
	},
	{
		name: "[Winner name]",
		business: "[Business name]",
		blurb: "[One line on what the business does]",
		photo: "",
	},
];

export const testimonials: Testimonial[] = [
	{
		quote: "[Quote from the 2026 feedback form]",
		name: "[Name]",
		role: "[Student, school / role]",
	},
	{
		quote: "[Quote from the 2026 feedback form]",
		name: "[Name]",
		role: "[Student, school / role]",
	},
	{
		quote: "[Quote from the 2026 feedback form]",
		name: "[Name]",
		role: "[Student, school / role]",
	},
];
