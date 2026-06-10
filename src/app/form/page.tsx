"use client";

import { useState } from "react";

export default function Page() {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [message, setMessage] = useState("");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setLoading(true);
		setSuccess(false);
		setMessage("");

		const formData = new FormData(e.currentTarget);

		const payload = {
			fullName: formData.get("fullName"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			school: formData.get("school"),
		};

		const res = await fetch("/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});
		const result = await res.json();

		setLoading(false);

		if (res.ok) {
			setSuccess(true);
			setMessage(
				`Registration successful. Check your email for confirmation. Email ID: ${result.emailId}`,
			);
			// e.currentTarget.reset();
			return;
		}

		setMessage(result.error || "Failed to register. Please try again.");
	}

	return (
		<div className="min-h-screen flex items-center justify-center p-6">
			<div className="w-full max-w-xl">
				<h1 className="text-3xl font-bold mb-2">B.I.G Conference 2026</h1>

				<p className="text-gray-600 mb-8">Register to attend the conference.</p>

				{message && (
					<div
						className={`mb-6 rounded-lg border p-4 ${
							success
								? "bg-green-50 border-green-200"
								: "bg-red-50 border-red-200"
						}`}
					>
						{message}
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						name="fullName"
						placeholder="Full Name"
						required
						className="w-full border rounded-lg p-3"
					/>

					<input
						type="email"
						name="email"
						placeholder="Email Address"
						required
						className="w-full border rounded-lg p-3"
					/>

					<input
						name="phone"
						placeholder="Phone Number"
						required
						className="w-full border rounded-lg p-3"
					/>

					<input
						name="school"
						placeholder="School / Organization"
						className="w-full border rounded-lg p-3"
					/>

					<button
						type="submit"
						disabled={loading}
						className="w-full bg-black text-white rounded-lg p-3"
					>
						{loading ? "Registering..." : "Register"}
					</button>
				</form>
			</div>
		</div>
	);
}
