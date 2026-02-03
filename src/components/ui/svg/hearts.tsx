import { cn } from "@/lib/utils"
import type { SVGProps } from "@/types/svg"

export function Heart({ className, ...props }: SVGProps) {
	return (
		<img
			src="assets/heart.svg"
			alt="Una flecha hacia la derecha"
			className={(cn(""), className)}
			{...props}
		></img>
	)
}

export function Hearts({ className, ...props }: SVGProps) {
	return (
		<img
			src="assets/hearts.svg"
			alt="Una flecha hacia la derecha"
			className={(cn(""), className)}
			{...props}
		></img>
	)
}
