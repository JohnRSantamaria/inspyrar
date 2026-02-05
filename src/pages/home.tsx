import Hero from "@/components/hero"
import IsoLogo from "@/components/ui/svg/logos"

import { SchedulingButton } from "@/components/ui/buttons/scheduling-button"
import MotionSection from "@/components/motion-section"
import About from "@/components/about"
import Price from "@/components/price"

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
			</MotionSection>
			<About />
			<Price />
		</main>
	)
}
