import { FaExternalLinkAlt } from "react-icons/fa"
import { Button } from "../button"
import { cn } from "@/lib/utils"

type SchedulingButtonProps = {
	onSchedule?: () => void
	className?: string
}

export function SchedulingButton({ onSchedule, className, ...props }: SchedulingButtonProps) {
	return (
		<Button
			className={cn("", className)}
			variant="secondary"
			onClick={onSchedule}
			{...props}
		>
			Agendar
			<FaExternalLinkAlt />
		</Button>
	)
}
