"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { PriceCardProps } from "@/types/price"
import MotionSection from "../motion-section"
import AnimatedText from "../animated-text"

function ServiceCard({ title, description, unitValue, totalValue, cta = "Agendar", onCtaClick }: PriceCardProps) {
	const [flipped, setFlipped] = useState(false)

	const handleCardClick = () => {
		setFlipped((prev) => !prev)
	}

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		onCtaClick?.()
	}

	return (
		<div
			className="w-full h-64 perspective-1000 cursor-pointer"
			onMouseEnter={() => setFlipped(true)}
			onMouseLeave={() => setFlipped(false)}
			onClick={handleCardClick}
		>
			<motion.div
				className="relative w-full h-full"
				animate={{ rotateY: flipped ? 180 : 0 }}
				transition={{ duration: 0.6 }}
				style={{ transformStyle: "preserve-3d" }}
			>
				{/* FRONT */}
				<Card
					className="absolute inset-0 flex items-center justify-center p-6 backface-hidden"
					style={{ backfaceVisibility: "hidden" }}
				>
					<p className="text-center leading-relaxed">
						<span className="font-bold">{title}: </span>
						{description}
					</p>
				</Card>

				{/* BACK */}
				<Card
					className="absolute inset-0 p-6 flex flex-col justify-between bg-muted backface-hidden"
					style={{
						transform: "rotateY(180deg)",
						backfaceVisibility: "hidden",
					}}
				>
					<div className="space-y-1">
						{unitValue && (
							<p>
								Valor sesión: <span>{unitValue}</span>
							</p>
						)}
						<p>
							Valor total: <span>{totalValue}</span>
						</p>
						<p>
							Modalidad: <span>Virtual</span>
						</p>
						<p>
							Duración: <span>60 minutos</span>
						</p>
					</div>

					{cta && (
						<button
							type="button"
							onClick={handleButtonClick}
							className="mt-4 rounded-xl bg-background text-foreground px-4 py-3 font-semibold shadow hover:opacity-90 active:scale-95 transition"
						>
							{cta}
						</button>
					)}
				</Card>
			</motion.div>
		</div>
	)
}

export default function Services() {
	// ✅ Aquí defines la lógica de cada plan
	const handleAgendarUnidad = () => {
		console.log("Agendar Unidad")
	}

	const handleAgendarDuo = () => {
		console.log("Agendar DUO")
	}

	const handleAgendarTetra = () => {
		console.log("Agendar TETRA")
	}

	const handleAgendarOcta = () => {
		console.log("Agendar Octa")
	}

	return (
		<MotionSection
			id="services"
			className="flex flex-col  items-center pt-10 p-4 gap-8"
		>
			<AnimatedText text="Servicios" />

			<p className="font-bold text-center max-w-350 text-xl lg:text-2xl w-full">
				Queremos que los precios de nuestros servicios de acompañamiento psicológico se acomoden a tu{" "}
				<span>bolsillo</span>, adquiere alguno de nuestros
				<span> paquetes</span> y disfruta beneficios adicionales.
			</p>

			<div className="w-full max-w-6xl grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
				<ServiceCard
					title="Unidad"
					description="Si prefieres pagar tu sesión de manera semanal una a una"
					totalValue="$72.000"
					onCtaClick={handleAgendarUnidad}
				/>

				<ServiceCard
					title="DUO"
					description="Si prefieres pagar 2 sesiones de manera quincenal"
					unitValue="$67.500"
					totalValue="$135.000"
					onCtaClick={handleAgendarDuo}
				/>

				<ServiceCard
					title="TETRA"
					description="Si prefieres pagar un paquete mensual (4 sesiones)"
					unitValue="$62.500"
					totalValue="$250.000"
					onCtaClick={handleAgendarTetra}
				/>
				<ServiceCard
					title="Octa"
					description="Si prefieres pagar 2 meses consecutivos (8 sesiones)"
					unitValue="$61.250"
					totalValue="$490.000"
					onCtaClick={handleAgendarOcta}
				/>
			</div>
		</MotionSection>
	)
}
