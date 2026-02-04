import React from "react"
import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const sectionVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 24,
	},
	show: {
		opacity: 1,
		y: 0,
	},
}

interface MotionSectionProps {
	id: string
	children: React.ReactNode
	className?: string
}

export default function MotionSection({ id, children, className, ...props }: MotionSectionProps) {
	return (
		<motion.section
			id={id}
			className={cn("min-h-dvh", className)}
			variants={sectionVariants}
			initial="hidden"
			animate="hidden"
			whileInView="show"
			viewport={{ amount: 0.35 }}
			transition={{
				duration: 0.55,
				ease: "easeOut",
			}}
			{...props}
		>
			{children}
		</motion.section>
	)
}
