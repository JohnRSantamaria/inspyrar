import { cn } from "@/lib/utils"
import type { SVGProps } from "@/types/svg"

export function CrownTwo({ className, ...props }: SVGProps) {
	return (
		<img
			src="assets/crown_two.svg"
			alt="Una flecha hacia la derecha"
			className={cn("", className)}
			{...props}
		></img>
	)
}

export function Crown({ className, ...props }: SVGProps) {
	return (
		<img
			src="assets/crown.svg"
			alt="Una flecha hacia la derecha"
			className={cn("", className)}
			{...props}
		></img>
	)
}
