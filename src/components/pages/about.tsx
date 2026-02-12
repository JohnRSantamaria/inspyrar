import AnimatedText from "../animated-text"
import MotionSection from "../motion-section"
import { Separator } from "../ui/separator"

export default function About() {
	return (
		<MotionSection id="about">
			<AnimatedText text="¿qué pasa con las personas mientras intentan sostenerlo todo? " />
			{/* mensaje */}
			<h3 className="text-xl md:text-3xl text-secondary font-bold">
				Inspyrar <span>nace</span> de esta pregunta incómoda
			</h3>
			<div className="flex flex-col items-center max-w-350">
				<div className="lg:w-2/3 flex flex-col gap-4 p-4 ">
					<p>
						Durante años hemos visto repetirse un mismo <span>ciclo</span>: personas totalmente competentes
						que, poco a poco, se sienten cada vez más agotadas, desmotivadas y desconectadas de sí mismas,
						de su propósito y de los demás.
					</p>

					<Separator />

					<p className="about-text">
						Acompañamos a personas adultas a <span>transformar</span> su relación con las emociones,
						aportando <span>herramientas</span> para afrontar crisis o dificultades de la vida a través del
						acompañamiento psicológico. A veces, solo necesitamos un espacio seguro para pausar, comprender
						lo que sentimos y no hacerlo <span>solos</span>.
					</p>
				</div>
			</div>
		</MotionSection>
	)
}
