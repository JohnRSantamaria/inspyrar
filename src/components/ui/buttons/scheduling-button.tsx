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
			className={(cn(""), className)}
			{...props}
			variant="secondary"
			onClick={onSchedule}
		>
			Agendar
			<FaExternalLinkAlt />
		</Button>
	)
}
