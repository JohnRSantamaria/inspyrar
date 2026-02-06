import React from "react"
import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const quote: Variants = {
	initial: { opacity: 1 },
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
}

const singleWord: Variants = {
	initial: { opacity: 0, y: 50 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 1, ease: "easeOut" },
	},
}

interface AnimatedTextProps {
	text: string
	className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, ...props }) => {
	return (
		<div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
			<motion.h2
				className={cn(
					"inline-block w-full font-bold capitalize text-4xl! md:text-6xl! leading-tight",
					className
				)}
				variants={quote}
				initial="initial"
				whileInView="animate"
				viewport={{ amount: 0.6 }}
				{...props}
			>
				{text.split(" ").map((word, index) => (
					<motion.span
						key={`${word}-${index}`}
						className="inline-block"
						variants={singleWord}
					>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h2>
		</div>
	)
}

export default AnimatedText
