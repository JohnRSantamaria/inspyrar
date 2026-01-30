import { motion } from "framer-motion"
import Hero from "./hero"

const sectionVariants = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0 },
}

function MotionSection({
	id,
	children,
	className = "",
}: {
	id: string
	children: React.ReactNode
	className?: string
}) {
	return (
		<motion.section
			id={id}
			className={`min-h-dvh border border-green-800 ${className}`}
			variants={sectionVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.35 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			{children}
		</motion.section>
	)
}

export default function Home() {
	return (
		<main>
			<MotionSection
				id="home"
				className="relative overflow-hidden"
			>
				<div className="hidden md:flex min-h-svh  items-center px-6 ">
					<div className="max-w-xl">
						<h2 className="text-5xl font-bold">Inspyrar</h2>
						<p className="mt-4 text-lg text-muted-foreground">Pausa. Respira. Entiende lo que sientes.</p>
					</div>
				</div>

				{/* Reel:
            - Mobile: centrado (mx-auto)
            - Desktop: flotante (absolute right/bottom)
        		*/}
				<Hero className="mx-auto mt-6 md:absolute md:right-6 md:bottom-6 md:mt-0 " />
			</MotionSection>

			<MotionSection
				id="about"
				className="bg-muted flex items-center justify-center"
			>
				<h2 className="text-3xl font-semibold">About</h2>
			</MotionSection>

			<MotionSection
				id="contact"
				className="flex items-center justify-center"
			>
				<h2 className="text-3xl font-semibold">Contact</h2>
			</MotionSection>
		</main>
	)
}
