import AnimatedText from "../animated-text"
import { MotionCarousel } from "../carousel"
import MotionSection from "../motion-section"

const slides = [
	{
		id: "1",
		title: "",
		description:
			"Quiero agradecerte mucho por el proceso que llevamos, me sentí realmente escuchada sin juzgamientos, aprendí muchísimo sobre mí misma y así mismo muchas herramientas que puedo aplicar para mejorar mi vida diaria, que aportan un montón a mi crecimiento personal, realmente quedo muy satisfecha con el proceso y no tengo duda de que si en algún momento llego a volver a requerirlo acudiré a ti directamente.",
		imageUrl: "/assets/chat.svg",
	},
	{
		id: "2",
		title: "",
		description:
			"Muchas gracias, en serio, por la ayuda. La verdad, me ha cambiado mucho la mentalidad desde el encuentro anterior. Estoy infinitamente agradecido y hacer que mi primera experiencia en psicología fuera muy gratificante.",
		imageUrl: "/assets/chat.svg",
	},
	{
		id: "3",
		title: "",
		description:
			"Estoy muy agradecida con el proceso de Inspyrar, me llevaste de la mano a un conocimiento personal que me permitió sanar muchas cosas, entendí mucho de mis emociones como una guía de vida y logré conectar completamente con ellas. Gracias, porque aunque muchas realidades de mi vida no cambian, la forma en que yo las vivo sí. Realmente logras inspirar y te involucras del todo en este proceso de sanar. Muchas gracias por tanto.",
		imageUrl: "/assets/chat.svg",
	},
	{
		id: "4",
		title: "",
		description:
			"Hola!!!\nLlegué a INSPYRAR porque a lo largo de mi vida había tomado decisiones de las cuales no estaba muy orgulloso y llegó un punto donde empezaron a pesarme; entrar en este proceso me ha dado herramientas para entender mis emociones y saber de dónde vienen mis sentimientos, me ayudó a descubrir y entender muchas cosas sobre mí mismo, que uso para seguir entrenando y desarrollando habilidades que me permiten retarme día a día sin extralimitarme.\nEs un proceso 100% recomendado, por su estructura y por su filosofía.\nMuchas gracias 🫶🏻.",
		imageUrl: "/assets/chat.svg",
	},
	{
		id: "5",
		title: "",
		description:
			"Aunque a veces no lo exprese o lo sienta… la ayuda o el empujón a afrontar cualquier obstáculo u objetivo que hemos planteado a lo largo que llevamos del proceso es un salto de fe en descubrir incógnitas o problemas que puedan dificultar el crecimiento.\nInspirar no es solo sentirse mejor… es motivar a que muchas veces el mundo puede ser lo que de verdad quieras ser y no lo que debes ser… ✌🏻🤍",
		imageUrl: "/assets/chat.svg",
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
