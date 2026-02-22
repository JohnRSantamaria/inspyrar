"use client"

import MotionSection from "../motion-section"
import AnimatedText from "../animated-text"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faq: Record<string, string> = {
	"¿Puedo iniciar aunque no tenga un problema grave?":
		"El acompañamiento psicológico es una herramienta valiosa para cualquier persona que desee crecer, aprender y mejorar su calidad de vida. Tu desarrollo personal también es importante para nosotros.",
	"¿Todo lo que comparto es confidencial?":
		"Sí. Siempre nos basamos desde este principio, sin embargo, existen algunas excepciones: en caso de que tu vida o la de un tercero se encuentre en riesgo. (Encontrarás más detalles en el consentimiento informado).",
	"¿Qué puedo esperar de la primera sesión?":
		"Exploraremos conjuntamente diversos aspectos de tu problemática, te escucharemos activamente para establecer objetivos y posteriormente ofrecerte las técnicas y herramientas más funcionales durante todo el proceso.",
	"¿Cuántas sesiones son necesarias?":
		"La duración varía en cada caso; lo importante es cumplir con las metas terapéuticas y las expectativas de tu proceso.",
	"¿Qué tipo de problemas se pueden tratar?":
		"Desde el manejo de experiencias emocionales hasta dificultades relacionales (autoestima, duelo, estrés, ruptura). Cada persona es única, así que nos adaptamos a tus necesidades específicas.",
}

export default function FAQ() {
	const items = Object.entries(faq)

	return (
		<MotionSection
			id="faq"
			className="flex flex-col items-center pt-10 p-4 gap-8"
		>
			<AnimatedText text="Preguntas frecuentes" />
			<h2 className="font-bold text-center max-w-3xl w-full md:text-xl ">
				Resolvemos algunas dudas comunes para que inicies tu proceso con tranquilidad.
			</h2>

			<div className="w-full flex-1 max-w-3xl text-md md:text-lg ">
				<Accordion
					type="single"
					collapsible
					className="w-full"
				>
					{items.map(([question, answer], idx) => (
						<AccordionItem
							key={question}
							value={`item-${idx}`}
						>
							<AccordionTrigger className="text-left">{question}</AccordionTrigger>
							<AccordionContent>
								<p className="leading-relaxed">{answer}</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</MotionSection>
	)
}
