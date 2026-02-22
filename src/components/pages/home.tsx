import MotionSection from "../motion-section"
import { SchedulingButton } from "../ui/buttons/scheduling-button"
import IsoLogo from "../ui/svg/logos"
import Hero from "./hero"

export default function Home() {
	const SchedulingHandler = () => {
		console.log("Clickeado")
	}
	return (
		<MotionSection
			id="home"
			className="flex-row items-center justify-evenly"
		>
			{/* Desktop */}
			<div className="hidden lg:flex flex-col items-center justify-evenly w-[min(420px,92vw)] aspect-9/16 text-center">
				<IsoLogo className="hidden lg:flex" />
				<h2 className="font-bold md:text-xl ">
					Un espacio seguro para entender lo que sientes, acompañado y a tu ritmo.
				</h2>
				<p className="md:text-lg">No necesitas tener todas las respuestas para empezar.</p>
				<SchedulingButton
					onSchedule={SchedulingHandler}
					className="hidden lg:flex w-96 h-14 "
				/>
			</div>
			{/* Mobile - Tablet*/}
			<div className="flex flex-col gap-4">
				<Hero onSchedule={SchedulingHandler} />
				<SchedulingButton
					onSchedule={SchedulingHandler}
					className="hidden md:flex lg:hidden w-96 h-14"
				/>
			</div>
		</MotionSection>
	)
}
