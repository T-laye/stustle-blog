import html2canvas from "html2canvas";

async function waitForFonts() {
	if ("fonts" in document) {
		await document.fonts.ready;
	}
}

async function waitForImages(node: HTMLElement) {
	const images = Array.from(node.querySelectorAll("img"));

	await Promise.all(
		images.map(
			(image) =>
				new Promise<void>((resolve) => {
					if (image.complete && image.naturalWidth > 0) {
						resolve();
						return;
					}

					image.onload = () => resolve();
					image.onerror = () => resolve();
				}),
		),
	);
}

function getSafeFileName(name: string) {
	return name.trim().replace(/\s+/g, "-") || "Guest";
}

function getExportScale(node: HTMLElement) {
	const width = node.getBoundingClientRect().width || node.offsetWidth;
	const targetWidth = 1500;

	return Math.max(4, targetWidth / width);
}

function adjustClonedExportNode(documentClone: Document, elementId: string) {
	if (elementId !== "volunteer-instagram-post-preview") {
		return;
	}

	const nameBox = documentClone.querySelector<HTMLElement>(
		"[data-export-name-box]",
	);
	const nameText = documentClone.querySelector<HTMLElement>(
		"[data-export-name-text]",
	);

	if (nameBox) {
		nameBox.style.transform = "translateY(0px)";
		nameBox.style.alignItems = "center";
	}

	if (nameText) {
		nameText.style.transform = "translateY(-5px)";
		nameText.style.display = "block";
		nameText.style.lineHeight = "10px";
		nameText.style.height = "100%";
		nameText.style.paddingBottom = "10px";
		// nameText.style.overflow = "hidden";
		// nameText.style.backgroundColor = "red";
	}
}

export async function downloadInstagramPost(
	name: string,
	_photoFile: File,
	elementId = "instagram-post-preview",
	filePrefix = "BIG-Volunteer",
): Promise<void> {
	const node = document.getElementById(elementId);

	if (!node) {
		throw new Error(`Preview node #${elementId} not found`);
	}

	await waitForFonts();
	await waitForImages(node);

	const scale = getExportScale(node);

	const canvas = await html2canvas(node, {
		backgroundColor: null,
		logging: false,
		scale,
		useCORS: true,
		windowHeight: document.documentElement.scrollHeight,
		windowWidth: document.documentElement.scrollWidth,
		onclone: (documentClone: Document) => {
			adjustClonedExportNode(documentClone, elementId);
		},
	} as unknown as Parameters<typeof html2canvas>[1]);

	const blob = await new Promise<Blob>((resolve, reject) => {
		canvas.toBlob((value) => {
			if (value) {
				resolve(value);
				return;
			}

			reject(new Error("Failed to create image blob"));
		}, "image/png");
	});

	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `${filePrefix}-${getSafeFileName(name)}.png`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
