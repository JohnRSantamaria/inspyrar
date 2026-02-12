import AnimatedText from "../animated-text"
import MotionSection from "../motion-section"
import { Separator } from "../ui/separator"
import { Avatar } from "../ui/svg/avatar"

export default function WhoAreWe() {
	return (
		<MotionSection
			id="who_are_we"
			className="bg-tertiary text-tertiary-foreground"
		>
			<AnimatedText
				text="¿Quiénes somos?"
				className="text-tertiary-foreground"
			/>
			<div>
				<p className="text-lg font-semibold">Somos un equipo de psicólogos que:</p>

				<ul className="mt-4 space-y-3 pl-4">
					<li className="flex items-center gap-2">
						{" "}
						<span className="text-green-600">✅</span> Escuchamos antes de intervenir.
					</li>
					<li className="flex items-center gap-2">
						<span className="text-green-600">✅</span>Comprendemos antes de proponer.
					</li>
					<li className="flex items-center gap-2">
						<span className="text-green-600">✅</span>
						Acompañamos procesos entendiendo que detrás de cada rol hay una persona, una historia y un
						contexto.
					</li>
				</ul>
			</div>

			<div className="flex items-center justify-center w-full">
				<div className="bg-card rounded-2xl max-w-2xl text-tertiary flex flex-col items-center gap-4">
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
