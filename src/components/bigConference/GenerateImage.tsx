"use client";
import React, { useState } from "react";
import { HiUpload, HiX, HiPhotograph } from "react-icons/hi";
import Button from "../ui/Button";
import InstaPost from "./InstaPost";
import { useImageStore } from "../../store/variables";

const GenerateImage = () => {
	const [dragOver, setDragOver] = useState(false);

	// Zustand store
	const { name, selectedFile, setName, setSelectedFile, resetState } =
		useImageStore();

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		if (file) {
			setSelectedFile(file);
		}
	};

	const handleDragOver = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setDragOver(true);
	};

	const handleDragLeave = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setDragOver(false);
	};

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setDragOver(false);
		const file = event.dataTransfer.files[0];
		if (file) {
			setSelectedFile(file);
		}
	};

	const removeFile = () => {
		setSelectedFile(null);
	};

	const formatFileSize = (bytes: number) => {
		if (bytes === 0) return "0 Bytes";
		const k = 1024;
		const sizes = ["Bytes", "KB", "MB", "GB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
	};

	const handleGenerate = async () => {
		if (!name.trim()) {
			alert("Please enter a name");
			return;
		}
		if (!selectedFile) {
			alert("Please select an image");
			return;
		}

		try {
			// Show loading state
			const button = document.querySelector(
				"[data-generate-btn]",
			) as HTMLButtonElement;
			if (button) {
				button.disabled = true;
				button.textContent = "Generating...";
			}

			// Import the download function
			const { downloadInstagramPost } = await import(
				"../../utils/downloadImage"
			);
			await downloadInstagramPost(name, selectedFile);

			alert("Image downloaded successfully!");
		} catch (error) {
			console.error("Error generating image:", error);
			alert("Failed to generate image. Please try again.");
		} finally {
			// Reset button state
			const button = document.querySelector(
				"[data-generate-btn]",
			) as HTMLButtonElement;
			if (button) {
				button.disabled = false;
				button.textContent = "Generate";
			}
		}
	};

	const handleReset = () => {
		resetState();
	};

	return (
		<section className="pt-10 sm:pt-20 lg:pt-40 sm:px-8">
			<div className="max-w-[800px] mx-auto flex flex-col-reverse sm:flex-row-reverse items-center justify-center rounded-[20px] bg-black overflow-hidden generate_bg">
				<div className="w-full mx-auto">
					<InstaPost />
				</div>
				<div className="w-full px-5 max-sm:py-[30px] py-5 ">
					<div className="bg-primary/25 border border-primary/10 backdrop-blur-[10px] rounded-tl-[10px] rounded-tr-[10px] text-white py-[30px] px-4">
						<h2 className="text-xl font-medium text-center mb-7 ">
							Generate your Attendees DP here
						</h2>

						<div className="flex flex-col gap-4 max-w-[500px] mx-auto">
							<div className="flex flex-col gap-[10px]">
								<label htmlFor="fullName" className="text-sm font-medium">
									Name
								</label>
								<input
									type="text"
									name="fullName"
									value={name}
									onChange={(e) => setName(e.target.value)}
									id="fullName"
									placeholder="Enter your name"
									className="h-[43px] px-2 w-full min-[1360px]:max-w-[800px] border border-[#AAAAAA] bg-transparent rounded-md text-base caret-primary placeholder:text-gray-300 placeholder:italic outline-none focus:border focus:border-primary duration-150 bg-white"
								/>
							</div>

							<div className="flex flex-col gap-[10px]">
								<label htmlFor="pictureUpload" className="text-sm font-medium">
									Picture
								</label>

								<div
									className={`relative border overflow-hidden border-dashed rounded-md transition-all duration-200 w-full min-[1360px]:max-w-[800px] bg-white ${
										dragOver
											? "border-blue-400 bg-blue-50"
											: selectedFile
												? "border-primary bg-primary-activeCard"
												: "border-[#AAAAAA] bg-transparent hover:border-primary hover:bg-primary-activeCard"
									}`}
									onDragOver={handleDragOver}
									onDragLeave={handleDragLeave}
									onDrop={handleDrop}
								>
									<input
										type="file"
										name="pictureUpload"
										id="pictureUpload"
										className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
										onChange={handleFileSelect}
										accept="image/*"
									/>

									{!selectedFile ? (
										<div className="flex flex-col items-center justify-center p-6 text-center">
											<div className="w-12 h-12 mb-3 bg-gray-200 rounded-full flex items-center justify-center">
												<HiUpload className="w-6 h-6 text-gray-400" />
											</div>
											<p className="text-base font-medium text-gray-600 mb-1">
												Drop your image here, or click to browse
											</p>
											<p className="text-sm text-gray-500">
												Supports: JPG, PNG, GIF up to 10MB
											</p>
										</div>
									) : (
										<div className="flex items-center justify-between p-4">
											<div className="flex items-center space-x-3">
												<div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
													<HiPhotograph className="w-5 h-5 text-primary" />
												</div>
												<div>
													<p className="font-medium text-gray-700 truncate max-w-xs">
														{selectedFile.name}
													</p>
													<p className="text-sm text-gray-500">
														{formatFileSize(selectedFile.size)}
													</p>
												</div>
											</div>
											<button
												onClick={removeFile}
												className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
												type="button"
											>
												<HiX className="w-5 h-5" />
											</button>
										</div>
									)}
								</div>

								{selectedFile && (
									<>
										<div className="flex items-center justify-between text-sm">
											<span className="text-primary font-medium">
												✓ File ready to upload
											</span>
										</div>
										<div className="mt-4 flex gap-2">
											<Button
												fn={handleGenerate}
												style="primary"
												type="button"
												data-generate-btn
											>
												Generate
											</Button>
											<Button fn={handleReset} style="secondary" type="button">
												Reset
											</Button>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GenerateImage;
