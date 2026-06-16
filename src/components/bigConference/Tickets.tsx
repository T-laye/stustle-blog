"use client";
import React, { useEffect, useRef } from "react";
import Subtitle from "./Subtitle";
import Button from "../ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Tickets() {
	const router = useRouter();
	const sectionRef = useRef<HTMLElement>(null);
	const subtitleRef = useRef<HTMLDivElement>(null);
	const descRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);
	const footerRef = useRef<HTMLParagraphElement>(null);

	const registerNow = () => {
		router.push("/events/big-conference/register");
	};

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Subtitle fade up
			gsap.fromTo(
				subtitleRef.current,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: { trigger: subtitleRef.current, start: "top 85%" },
				},
			);

			// Description fade up
			gsap.fromTo(
				descRef.current,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power3.out",
					delay: 0.1,
					scrollTrigger: { trigger: descRef.current, start: "top 88%" },
				},
			);

			// Cards stagger in from below
			if (cardsRef.current) {
				gsap.fromTo(
					cardsRef.current.children,
					{ opacity: 0, y: 50, scale: 0.96 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.75,
						stagger: 0.18,
						ease: "power3.out",
						scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
					},
				);
			}

			// Footer note
			gsap.fromTo(
				footerRef.current,
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 0.6,
					delay: 0.2,
					scrollTrigger: { trigger: footerRef.current, start: "top 95%" },
				},
			);
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	const supportEvent = () => {
		window.open("https://selar.com/81dsr7rc81", "_blank");
	};

	return (
		<section
			id="big-tickets"
			ref={sectionRef}
			className="px-4 sm:px-8 pt-20 pb-20"
		>
			<div className="container">
				<div
					ref={subtitleRef}
					className="flex flex-col items-center justify-center"
				>
					<Subtitle text="Get Your Spot " style="flex flex-col items-center " />
				</div>

				<div ref={descRef} className="sm:text-lg text-center max-w-2xl mx-auto">
					Attendance is completely free — because we believe financial barriers
					should never stand between young people and opportunity.
				</div>

				<div
					ref={cardsRef}
					className="tickets-grid grid grid-cols-1 gap-10 sm:grid-cols-2 mx-auto bgred-300"
				>
					<div className="ticket-card rounded-lg flex-col flex justify-between">
						<div>
							<span className="ticket-badge">Free Entry</span>
							<div className="ticket-price">₦0</div>
							<p className="ticket-price-note">Always free. No hidden cost.</p>
							<p className="ticket-name">General Ticket</p>
							<ul className="ticket-perks">
								<li>Full in-person or virtual access</li>
								<li>All keynote & workshop sessions</li>
								<li>Networking access</li>
								<li>Session recordings (within 48hrs)</li>
							</ul>
						</div>
						<div className="mt-auto">
							<Button fn={registerNow} style="primary" type="button">
								Register for Free →
							</Button>
						</div>
					</div>
					<div className="ticket-card featured">
						<span className="ticket-badge">Support the Event</span>
						<div className="ticket-price">₦5,000</div>
						<p className="ticket-price-note">
							Per support ticket &nbsp;·&nbsp; Buy as many as you&apos;d like
						</p>
						<p className="ticket-name">Support Ticket</p>
						<div className="ticket-note">
							This ticket is{" "}
							<strong style={{ color: "var(--gold-light)" }}>
								completely optional
							</strong>{" "}
							and gives no additional access or benefits. It&apos;s simply a way
							to contribute to making B.I.G Conference possible for everyone.
						</div>
						<ul className="ticket-perks">
							<li>Same access as the free ticket</li>
							<li>Your contribution funds the event</li>
							<li>Helps keep it free for all attendees</li>
							<li>Purchase multiple to show more love 🧡</li>
						</ul>
						<p className="ticket-multi-note">
							* You may purchase multiple support tickets to contribute more
						</p>
						<div className="mt-auto">
							<Button fn={supportEvent} style="primary" type="button">
								Support the Event →
							</Button>
						</div>
					</div>
				</div>
				<p
					ref={footerRef}
					className="text-center"
					style={{
						marginTop: "1.5rem",
						fontSize: "0.8rem",
						color: "var(--ink-muted)",
					}}
				>
					For tailored sponsorship packages, reach out directly:{" "}
					<a
						href="mailto:jane@stustle.com"
						style={{ color: "var(--gold-deep)" }}
					>
						jane@stustle.com
					</a>
				</p>
			</div>
		</section>
	);
}
