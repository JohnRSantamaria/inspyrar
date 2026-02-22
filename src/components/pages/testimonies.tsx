import AnimatedText from "../animated-text"
import { MotionCarousel } from "../carousel"
import MotionSection from "../motion-section"

const slides = [
	{
		id: "1",
		title: "Un espacio para escucharte",
		description: "Aquí puedes hablar sin juicios ni prisas, con acompañamiento profesional y humano.",
		imageUrl: "/assets/testimonios/testimonio_1.svg",
	},
	{
		id: "2",
		title: "Comprender lo que sientes",
		description: "Trabajamos juntos para entender tus emociones y darles un lugar dentro de tu historia.",
		imageUrl: "/assets/testimonios/testimonio_2.svg",
	},
	{
		id: "3",
		title: "Acompañamiento en momentos difíciles",
		description: "Cuando todo pesa, no tienes que sostenerlo solo. Caminamos contigo paso a paso.",
		imageUrl: "/assets/testimonios/testimonio_3.svg",
	},
	{
		id: "4",
		title: "Herramientas para la vida diaria",
		description: "Incorporamos recursos prácticos que te ayuden a afrontar situaciones reales con mayor claridad.",
		imageUrl: "/assets/testimonios/testimonio_4.svg",
	},
	{
		id: "5",
		title: "Proceso a tu propio ritmo",
		description: "Cada persona tiene su tiempo. Respetamos tu proceso para avanzar de forma consciente y segura.",
		imageUrl: "/assets/testimonios/testimonio_5.svg",
	},
]

export default function Testimonies() {
	return (
		<MotionSection id="testimonies">
			<AnimatedText text="testimonios" />
			<MotionCarousel
				slides={slides}
				className="w-full"
			/>
		</MotionSection>
	)
}
