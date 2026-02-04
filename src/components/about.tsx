import AnimatedText from "./animated-text"
import MotionSection from "./motion-section"
import { Avatar } from "./ui/svg/avatar"

export default function About() {
	return (
		<MotionSection
			id="about"
			className="bg-muted flex flex-col items-stretch pt-10 p-4 gap-4"
		>
			<AnimatedText
				text="Aquí no tienes que estar bien"
				className="leading-tight text-2xl "
			/>
			<div>
				<p className="about-text ">
					A veces solo necesitamos un espacio seguro para pausar, entender lo que sentimos y no hacerlo solos.
				</p>
				<p>
					En Inspyrar te acompañamos a comprender tus emociones, sin presión, a tu ritmo, usando herramientas
					psicológicas y hábitos que cuidan tu bienestar mental y emocional.
				</p>
			</div>
			<div className="flex flex-col gap-4">
				<Avatar />
				<p className="text-center font-black">Soy Paula Chocontá Cardozo Psicóloga y fundadora de INSPYRAR</p>
				<p className="text-center">
					Creo profundamente que el acompañamiento correcto puede abrir nuevas formas de vivir incluso en
					momentos difíciles.
				</p>
			</div>
			<div className="flex flex-col gap-4">
				<h3 className="text-xl text-secondary font-bold">¿Quiénes somos?</h3>
				<p>
					Somos un espacio seguro para ti, en donde puedes compartir tus experiencias, tus pensamientos y
					emociones, un lugar en el que podrás ser tú mismo y recibir el apoyo que necesitas.
				</p>
			</div>
			<div>
				<p>Ahora quiero contarte cuál es la metodología para iniciar tu acompañamiento psicológico.</p>
			</div>
		</MotionSection>
	)
}
