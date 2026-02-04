import { cn } from "@/lib/utils"
import type { SVGProps } from "@/types/svg"

export function ArrowDownTwo({ className, ...props }: SVGProps) {
	return (
		<img
			src="assets/arrow_down_two.svg"
			alt="Una flecha hacia abajo"
			className={cn("", className)}
			{...props}
		></img>
	)
}

export function ArrowDown({ className, ...props }: SVGProps) {
	return (
		<img
			src="assets/arrow_down.svg"
			alt="Una flecha hacia abajo"
			className={cn("", className)}
			{...props}
		></img>
	)
}

export function ArrowRight({ className, ...props }: SVGProps) {
	return (
		<img
			src="assets/arrow_right.svg"
			alt="Una flecha hacia la derecha"
			className={cn("", className)}
			{...props}
		></img>
	)
}

export function ArrowUp({ className, ...props }: SVGProps) {
	return (
		<img
			src="assets/arrow_up.svg"
			alt="Una flecha hacia la derecha"
			className={cn("", className)}
			{...props}
		></img>
	)
}
