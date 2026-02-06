import { cn } from "@/lib/utils"

type LogoProps = {
	className?: string
}

export default function IsoLogo({ className, ...props }: LogoProps) {
	return (
		<img
			src="logos/isologo.svg"
			alt="Inspyrar isologo"
			className={cn("", className)}
			{...props}
		/>
	)
}

export function Logo({ className, ...props }: LogoProps) {
	return (
		<img
			src="logos/logo_2.svg"
			alt="Inspyrar isologo"
			className={cn("", className)}
			{...props}
		/>
	)
}
