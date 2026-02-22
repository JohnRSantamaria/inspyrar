"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { PriceCardProps } from "@/types/price"
import MotionSection from "../motion-section"
import AnimatedText from "../animated-text"

function ServiceCard({ ref, unitValue, totalValue, cta = "Agendar", onCtaClick }: PriceCardProps) {
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
					<div
						className="absolute inset-0 bg-cover bg-center rounded-xl"
						style={{ backgroundImage: ref }}
					/>
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

			<p className="font-bold text-center max-w-350 w-full md:text-xl">
				Queremos que los precios de nuestros servicios de acompañamiento psicológico se acomoden a tu{" "}
				<span>bolsillo</span>, adquiere alguno de nuestros
				<span> paquetes</span> y disfruta beneficios adicionales.
			</p>

			<div className="w-full max-w-6xl grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:text-lg">
				<ServiceCard
					ref="url('/assets/sesiones/sesion-1.webp')"
					totalValue="$72.000"
					onCtaClick={handleAgendarUnidad}
				/>

				<ServiceCard
					ref="url('/assets/sesiones/sesion-2.webp')"
					unitValue="$67.500"
					totalValue="$135.000"
					onCtaClick={handleAgendarDuo}
				/>

				<ServiceCard
					ref="url('/assets/sesiones/sesion-4.webp')"
					unitValue="$62.500"
					totalValue="$250.000"
					onCtaClick={handleAgendarTetra}
				/>
				<ServiceCard
					ref="url('/assets/sesiones/sesion-8.webp')"
					unitValue="$61.250"
					totalValue="$490.000"
					onCtaClick={handleAgendarOcta}
				/>
			</div>
		</MotionSection>
	)
}
