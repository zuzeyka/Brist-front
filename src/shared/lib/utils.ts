import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the custom font sizes from tailwind.config.js, otherwise
// it treats e.g. `text-button-1` as a colour and drops it next to `text-background`.
const twMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			"font-size": [{
				text: [
					"heading-1", "heading-2", "heading-3", "subheading-1", "subheading-2",
					"block-1", "block-2", "big-sign", "sign-1", "sign-2", "sign-3", "sign-4", "sign-5",
					"button-1", "button-2",
				],
			}],
		},
	},
});

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
