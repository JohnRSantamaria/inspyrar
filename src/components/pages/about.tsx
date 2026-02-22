import AnimatedText from "../animated-text"
import MotionSection from "../motion-section"

export default function About() {
	return (
		<MotionSection id="about">
			<AnimatedText text="¿Qué pasa con las personas mientras intentan sostenerlo todo? " />

			<div className="flex flex-1 flex-col md:flex-row md:justify-center md:items-start items-center  max-w-350 gap-4 text-center ">
				{/* img */}
				<div className="md:text-lg ">
					<div className="relative w-[min(420px,92vw)] h-180  rounded-2xl overflow-hidden">
						<div
							className="absolute inset-0 bg-cover bg-center"
							style={{ backgroundImage: "url('/assets/avatar.webp')" }}
						/>
						<div className="absolute inset-0 bg-black/20" />
						<div className="absolute inset-0 flex flex-col gap-4 justify-end p-6 text-white bg-linear-to-t from-black/50 to-transparent">
							<h2 className="md:text-xl">
								Soy Paula Chocontá Cardozo, Psicóloga y fundadora de INSPYRAR.{" "}
							</h2>
							<p>
								Mi propósito es ser voz y espacio donde la salud mental florece, el estigma se desvanece
								y la vida recupera sentido
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col  items-center justify-evenly gap-4  ">
					<h2 className="text-secondary font-bold text-center md:text-xl">
						Inspyrar <span>nace</span> de esta pregunta incómoda:
					</h2>
					{/* nace de  */}
					<div className="flex flex-col justify-evenly items-center">
						<div className="flex flex-col gap-4 p-4 ">
							<p>
								Durante años hemos visto repetirse un mismo <span>ciclo</span>:
							</p>
							<p>
								personas totalmente competentes que, poco a poco, se sienten cada vez más agotadas,
								desmotivadas y desconectadas de sí mismas, de su propósito y de los demás.
							</p>
						</div>

						<div className="flex flex-col gap-4 p-4 ">
							<p>
								Acompañamos a personas adultas a <span>transformar</span> su relación con las emociones,
								aportando <span>herramientas</span> para afrontar crisis o dificultades de la vida a
								través del acompañamiento psicológico. A veces, solo necesitamos un espacio seguro para
								pausar, comprender lo que sentimos y no hacerlo <span>solos</span>.
							</p>
						</div>
					</div>
					{/* equipo de psicologos */}
					<div className="text-center">
						<p className="font-semibold md:text-xl">Somos un equipo de psicólogos que:</p>

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
								Acompañamos procesos entendiendo que detrás de cada rol hay una persona, una historia y
								un contexto.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</MotionSection>
	)
}
