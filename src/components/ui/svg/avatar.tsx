import { cn } from "@/lib/utils"
import type { SVGProps } from "@/types/svg"

export function Avatar({ className, ...props }: SVGProps) {
	return (
		<img
			src="assets/avatar.svg"
			alt="Una chica con lentes"
			className={cn("", className)}
			{...props}
		></img>
	)
}
