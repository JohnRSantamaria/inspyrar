import AnimatedText from "./animated-text"
import MotionSection from "./motion-section"
import { Separator } from "./ui/separator"
import { Avatar } from "./ui/svg/avatar"

export default function About() {
	return (
		<MotionSection
			id="about"
			className="bg-muted flex flex-col items-center pt-10 p-4 gap-4 md:gap-8  lg:gap-16 lg:px-16"
		>
			<AnimatedText
				text="Aquí no tienes que estar bien"
				className="leading-tight text-2xl! md:text-6xl! "
			/>
			<div className="grid lg:grid-cols-2 gap-4 justify-center items-center ">
				{/* avatar  */}
				<div className="flex flex-col gap-4 bg-card rounded-2xl shadow-lg ">
					<Avatar className="w-auto max-h-100 border-b-4 border-secondary" />
					<span className="text-center p-4">
						<p className="font-black">Soy Paula Chocontá Cardozo Psicóloga y fundadora de INSPYRAR</p>
						<Separator />
						<p>
							Creo profundamente que el acompañamiento correcto puede abrir nuevas formas de vivir incluso
							en momentos difíciles.
						</p>
					</span>
				</div>
				{/* mensaje */}
				<div className="h-full flex flex-col items-center justify-center gap-8 lg:p-16 ">
					{" "}
					<div className="flex flex-col gap-4 text-center">
						<h3 className="text-4xl text-secondary font-bold">¿Quiénes somos?</h3>
						<p>
							Somos un espacio seguro para ti, en donde puedes compartir tus experiencias, tus
							pensamientos y emociones, un lugar en el que podrás ser tú mismo y recibir el apoyo que
							necesitas.
						</p>
					</div>
					<Separator />
					<span className="text-center">
						<p className="about-text">
							A veces solo necesitamos un espacio seguro para pausar, entender lo que sentimos y no
							hacerlo solos.
						</p>
						<p>
							En Inspyrar te acompañamos a comprender tus emociones, sin presión, a tu ritmo, usando
							herramientas psicológicas y hábitos que cuidan tu bienestar mental y emocional.
						</p>
					</span>
				</div>
			</div>
			<Separator />
			<div className="flex items-center justify-center font-bold">
				<p className="text-center">
					Ahora quiero contarte cuál es la metodología para iniciar tu acompañamiento psicológico.
				</p>
			</div>
		</MotionSection>
	)
}
