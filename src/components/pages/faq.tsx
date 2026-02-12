"use client"

import MotionSection from "../motion-section"
import AnimatedText from "../animated-text"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faq: Record<string, string> = {
	"¿Puedo iniciar aunque no tenga un problema grave?":
		"El acompañamiento psicològico es una herramienta valiosa para cualquier persona que desee crecer, aprender y mejorar su calidad de vida. Tu desarrollo personal tambièn es importante para nosotros.",
	"¿Todo lo que comparto es confidencial?":
		"Sí. Siempre nos basamos desde este principio, sin embargo, existen algunas excepciones: en caso de que tu vida o la de un tercero se encuentre en riesgo. (Encontrarás más detalles en el consentimiento informado).",
	"¿Qué puedo esperar de la primera sesiòn?":
		"Exploraremos conjuntamente diversos aspectos de tu problemàtica, te escucharemos activamente para establecer objetivos y posteriormente ofrecerte las tècnicas y herramientas màs funcionales durante todo el proceso.",
	"¿Cuàntas sesiones son necesarias?":
		"La duraciòn varìa en cada caso; lo importante es cumplir con las metas terapèuticas y las expectativas de tu proceso.",
	"¿Qué tipo de problemas se pueden tratar?":
		"Desde el manejo de experiencias emocionales hasta dificultades relacionales (autoestima, duelo, estrés, ruptura). Cada persona es ùnica, asì que nos adaptamos a tus necesidades especifìcas.",
	"¿Cómo puedo iniciar?":
		"Solo debes llenar el formulario pre-sesión para conocer tu disponibilidad y recolectar unos datos. Envíanos una imagen del comprobante y te asignaremos el profesional más idóneo.",
}

export default function FAQ() {
	const items = Object.entries(faq)

	return (
		<MotionSection
			id="faq"
			className="flex flex-col items-center pt-10 p-4 gap-8"
		>
			<AnimatedText text="Preguntas frecuentes" />

			<p className="font-bold text-center max-w-3xl text-xl lg:text-2xl">
				Resolvemos algunas dudas comunes para que inicies tu proceso con tranquilidad.
			</p>

			<div className="w-full max-w-3xl">
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
