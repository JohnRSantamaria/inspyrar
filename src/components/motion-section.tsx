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
			className={cn("overflow-hidden min-h-dvh flex flex-col items-center justify-normal p-4 gap-4", className)}
			{...props}
		>
			{children}
		</section>
	)
}
