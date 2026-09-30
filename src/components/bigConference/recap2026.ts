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
	{ name: "Charissa", logo: `${LOGOS}/charissa.webp` },
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
	{ name: "House of Amaezan", logo: `${LOGOS}/house-of-amaezan.webp` },
	{ name: "Ingather", logo: `${LOGOS}/ingather.webp`, bg: "#000000" },
	{
		name: "JCI Nigeria FUPRE",
		logo: `${LOGOS}/jci-nigeria-fupre.webp`,
		bg: "#140f2d",
	},
	{ name: "Josefshots Photography", logo: `${LOGOS}/josefshots.webp` },
	{ name: "La-Yedi Stores", logo: `${LOGOS}/la-yedi-stores.webp` },
	{ name: "LVIS Solutions", logo: `${LOGOS}/lvis-solutions.webp` },
	{ name: "MOD Education", logo: `${LOGOS}/mod-education.webp` },
	{
		name: "National Union of Izon-Ibe Students (NUIS)",
		logo: `${LOGOS}/nuis-izonkenewenemo.webp`,
		bg: "#010101",
	},
	{
		name: "OOU Web3 Community",
		logo: `${LOGOS}/oou-web3-community.webp`,
		bg: "#6f00fc",
	},
	{ name: "Rume Visuals", logo: `${LOGOS}/rume-visuals.webp`, bg: "#000000" },
	{ name: "Skysenx Hub", logo: "/images/skysenx-logo.svg" },
	{ name: "Supa Records", logo: `${LOGOS}/supa-records.webp`, bg: "#030303" },
	{
		name: "The Knowledgeable Ladies Network",
		logo: `${LOGOS}/knowledgeable-ladies-network.webp`,
		bg: "#250d3d",
	},
	{ name: "The Reset Community", logo: `${LOGOS}/the-reset-community.webp` },
	{ name: "Tri-P Tech", logo: `${LOGOS}/tri-p-tech.webp` },
	{ name: "Weefa", logo: `${LOGOS}/weefa.webp`, bg: "#1a1a1a" },
	{ name: "YEFoN", logo: `${LOGOS}/yefon.webp` },
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

// Shortened excerpts from the B.I.G. Testimonials doc — wording kept, only trimmed
export const testimonials: Testimonial[] = [
	{
		quote:
			"It was my first ever business conference and it was really worth it. It has changed my life. Please do this again and again.",
		name: "Azoke-William Marvellous",
		role: "B.I.G. 2026 attendee",
	},
	{
		quote:
			"The theme, KAIZEN – Small Steps. Steady Growth, truly came alive throughout the sessions. I didn’t just attend the conference; I came away with lessons and perspectives that I know I will carry with me beyond the event.",
		name: "Peace Oyewo",
		role: "Attended virtually",
	},
	{
		quote:
			"I’ve been holding back from posting my work because I keep feeling like everything has to be perfect first… every session kept making me realize that if I keep waiting for perfection, I may never start. So yes, I’m taking my small steps now.",
		name: "Trust Omelime",
		role: "Attended in person",
	},
	{
		quote:
			"The sessions were absolutely value packed, the speakers were amazing. The statement made by Osita James, “Our lives should be optimized for impact and not for profit”, is something I’ll be running my life by.",
		name: "Ele-Abinya Faithful Onwanyi",
		role: "B.I.G. 2026 attendee",
	},
	{
		quote: "I got a mind shift in this conference. I’m super elated!",
		name: "Hephzibah",
		role: "B.I.G. 2026 attendee",
	},
	{
		quote:
			"A really refreshing experience… a space where young people can learn, connect, and feel encouraged to do more. Being part of the media team gave me the opportunity to contribute behind the scenes and be part of something meaningful.",
		name: "Abejoye Janet Iyanuoluwa",
		role: "Media team volunteer",
	},
	{
		quote:
			"The access to hear from speakers with such depth, pouring out their all, for free is just amazing. Let’s do more.",
		name: "David Bassey",
		role: "B.I.G. 2026 attendee",
	},
	{
		quote:
			"You guys are building something big with impact. Helping the young is really good, I am a proof of that.",
		name: "Unique Ogheneogaga",
		role: "B.I.G. 2026 attendee",
	},
	{
		quote:
			"The whole process right from the check-in was excellent. Choice of speakers superb… In all it was an educative, memorable experience.",
		name: "Ama-Okoko Chukwuebuka Andrew",
		role: "B.I.G. 2026 attendee",
	},
];
