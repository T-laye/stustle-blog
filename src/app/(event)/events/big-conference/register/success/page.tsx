import Link from "next/link";

const WHATSAPP_CHANNEL_URL =
	"https://whatsapp.com/channel/0029VbBqgKVDTkK9XBAYk23J";

type SuccessPageProps = {
	searchParams: Promise<{
		registrationId?: string;
	}>;
};

export default async function Page({ searchParams }: SuccessPageProps) {
	const { registrationId } = await searchParams;

	return (
		<main className="min-h-screen bg-white-background px-4 py-16">
			<section className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
				<div className="w-full rounded-[32px] border border-primary-active bg-white p-8 text-center shadow-[0_24px_80px_rgba(25,16,0,0.08)] sm:p-12">
					<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-activeCard text-3xl text-primary">
						&#10003;
					</div>

					<p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
						Registration Successful
					</p>

					<h1 className="text-3xl font-extrabold text-black sm:text-4xl">
						You&apos;re registered for The B.I.G Conference 2026
					</h1>

					<p className="mx-auto mt-4 max-w-lg text-base leading-7 text-gray-300">
						Your registration was submitted successfully. You will receive a
						confirmation email with your event details shortly.
					</p>

					<div className="mx-auto mt-6 max-w-lg rounded-2xl border border-primary-active bg-primary-activeCard px-5 py-4">
						<p className="text-sm font-semibold text-black">
							Join our WhatsApp channel for conference updates, reminders, and
							post-event information.
						</p>
						<a
							href={WHATSAPP_CHANNEL_URL}
							target="_blank"
							rel="noreferrer"
							className="mt-4 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
						>
							Join WhatsApp channel
						</a>
					</div>

					{registrationId && (
						<div className="mx-auto mt-8 max-w-sm rounded-2xl border border-primary-active bg-primary-activeCard px-5 py-4">
							<p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
								Registration ID
							</p>
							<p className="mt-2 text-2xl font-extrabold tracking-wide text-black">
								{registrationId}
							</p>
						</div>
					)}

					<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
						<Link
							href="/events/big-conference"
							className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
						>
							Back to event page
						</Link>
						<Link
							href="/"
							className="rounded-full border border-primary-active px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary-activeCard"
						>
							Go home
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
