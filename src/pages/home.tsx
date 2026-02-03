import Hero from "@/components/hero"
import IsoLogo from "@/components/ui/svg/logos"

import { SchedulingButton } from "@/components/ui/buttons/scheduling-button"
import { ArrowDown } from "@/components/ui/svg/arrows"
import { Crown, CrownTwo } from "@/components/ui/svg/crowns"
import { motion } from "framer-motion"

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
			className={`min-h-dvh ${className}`}
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
	const SchedulingHandler = () => {
		console.log("Clickeado")
	}

	return (
		<main>
			<MotionSection
				id="home"
				className="relative overflow-hidden p-4 flex flex-col lg:flex-row gap-4"
			>
				<div className="hidden md:flex md:flex-col items-center justify-center gap-4 lg:w-1/2">
					<IsoLogo className="max-w-lg" />

					<h1 className="hidden lg:block text-3xl font-bold leading-tight">
						No tienes que estar bien para empezar.
					</h1>

					<p className="hidden lg:block mt-3 text-base opacity-90">
						Un espacio seguro para entender lo que sientes, acompañado y a tu ritmo.
					</p>

					<SchedulingButton
						onSchedule={SchedulingHandler}
						className="hidden lg:flex w-96 h-14 text-2xl "
					/>
				</div>
				<div className="flex flex-col items-center lg:items-center justify-center gap-4 lg:w-1/2">
					<Hero onSchedule={SchedulingHandler} />
					<SchedulingButton
						onSchedule={SchedulingHandler}
						className="hidden md:flex lg:hidden w-96 h-14 text-2xl "
					/>
				</div>
				{/* SVG's */}
				<Crown className="hidden lg:block absolute w-auto h-40 top-10 right-10 rotate-40" />
				<ArrowDown className="hidden lg:block absolute bottom-1/6 right-1/2 w-auto h-40" />
				<CrownTwo className="hidden lg:block absolute w-auto h-20 top-1/8 left-1/12 -rotate-45 " />
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
