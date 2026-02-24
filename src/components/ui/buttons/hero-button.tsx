import { cn } from "@/lib/utils"
import { CiBookmarkCheck } from "react-icons/ci"
type HeroPrompt = {
	OnScheduling?: () => void
	className?: string
}

export default function HeroButton({ OnScheduling, className }: HeroPrompt) {
	return (
		<button
			className={cn(
				"rounded-lg flex items-center justify-center gap-2 text-white shadow-lg hover:opacity-90 active:scale-95",
				className
			)}
			onClick={OnScheduling}
		>
			<CiBookmarkCheck className="text-xl font-bold" />
			Agendar
		</button>
	)
}
