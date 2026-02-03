import { cn } from "@/lib/utils"

type IsoLogoProps = {
	className?: string
}

function IsoLogo({ className, ...props }: IsoLogoProps) {
	return (
		<img
			src="logos/isologo.svg"
			alt="Inspyrar isologo"
			className={cn("", className)}
			{...props}
		/>
	)
}
export default IsoLogo
