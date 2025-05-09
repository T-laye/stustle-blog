import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import "easymde/dist/easymde.min.css";
import Footer from "@/components/landing/Footer";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const rubik = localFont({
  src: [
    {
      path: "./fonts/Rubik-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Rubik-Light.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-rubik",
});

const digitNumbers = localFont({
  src: [
    {
      path: "./fonts/DigitalNumbers-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-digitNumbers",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stustle.com"),
  title: {
    template: `%s | Stustle`,
    default: "Stustle",
  },
  description:
    "Students hustle and service platform. Making life easy in terms of daily tasks, school tasks and finances",
  keywords: [
    "student, freelance, hustle, cleaning, tech, web development, design, graphics, ui/ux, academic, assignment",
  ],
  openGraph: {
    title: "Stustle",
    description:
      "Students hustle and service platform. Making life easy in terms of daily tasks, school tasks and finances",
    images: [
      {
        url: "/images/stustle_blog.webp",
        alt: "stustle",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <Head>
        <meta name="theme-color" content="#E29507" />
      </Head>
      <body
        className={`${rubik.variable} ${rubik.variable} ${digitNumbers.variable} antialiased bg-white-background`}
      >
        <Header />
        <NextTopLoader
          color="#E29507"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
