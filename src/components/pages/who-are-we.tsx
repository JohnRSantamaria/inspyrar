import AnimatedText from "../animated-text"
import MotionSection from "../motion-section"
import { Separator } from "../ui/separator"
import { Avatar } from "../ui/svg/avatar"

export default function WhoAreWe() {
	return (
		<MotionSection id="who_are_we">
			<AnimatedText text="¿Quiénes somos?" />
		

			<div className="flex items-center justify-center w-full md:text-lg">
				<div className="bg-card rounded-2xl max-w-2xl flex flex-col items-center gap-4 shadow-md">
					<Avatar className="max-h-100 w-[min(420px,)92vw]" />
					<div className="text-center p-4">
						<p className="">
							Soy <span>Paula Chocontá Cardozo</span>, Psicóloga y fundadora de INSPYRAR.
						</p>
						<Separator />
						<p>
							Mi propósito es ser voz y espacio donde la salud mental florece, el estigma se desvanece y
							la vida recupera sentido
						</p>
					</div>
				</div>
			</div>
		</MotionSection>
	)
}
