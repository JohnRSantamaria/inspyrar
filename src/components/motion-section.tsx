import React from "react"
import { cn } from "@/lib/utils"

interface MotionSectionProps {
	id: string
	children: React.ReactNode
	className?: string
}

export default function MotionSection({ id, children, className, ...props }: MotionSectionProps) {
	return (
		<section
			id={id}
			className={cn("min-h-dvh", className)}
			{...props}
		>
			{children}
		</section>
	)
}
