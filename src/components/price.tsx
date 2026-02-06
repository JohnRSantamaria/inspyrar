import type { PriceCardProps } from "@/types/price"
import AnimatedText from "./animated-text"
import MotionSection from "./motion-section"

function PriceCard({ title, description, unitValue, totalValue, cta }: PriceCardProps) {
	return (
		<div className="rounded-2xl border p-4 md:p-6 flex flex-col gap-4 min-h-60 bg-muted shadow-lg justify-evenly   ">
			<p className="leading-relaxed">
				<span className="font-bold">{title}: </span>
				{description}
			</p>

			<div className="flex flex-row gap-4 items-center justify-between">
				<div>
					{unitValue && (
						<p>
							Valor unidad: <span className="font-bold">{unitValue}</span>
						</p>
					)}
					<p>
						Valor total: <span className="font-bold">{totalValue}</span>
					</p>
				</div>
				{cta && (
					<button className="mt-2 w-full rounded-xl border px-4 py-3 text-lg md:text-xl font-semibold max-w-sm bg-secondary text-secondary-foreground shadow hover:opacity-90 active:scale-y-95 active:scale-x-98 transition-transform duration-300 ">
						{cta}
					</button>
				)}
			</div>
		</div>
	)
}

export default function Price() {
	return (
		<MotionSection
			id="price"
			className="flex flex-col items-stretch pt-10 p-4 gap-4"
		>
			<AnimatedText
				text="Costos"
				className="leading-tight text-2xl! md:text-6xl!"
			/>

			<p className="font-bold text-center max-w-3xl mx-auto">
				Queremos que los precios de nuestros servicios de acompañamiento psicológico se acomoden a tu bolsillo,
				es por eso que al adquirir un paquete, podrás disfrutar de beneficios adicionales y ahorrar en el costo
				por sesión
			</p>

			{/* Cards */}
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-3 lg:gap-6 max-w-400 m-auto">
				{/* UNIDAD (izquierda arriba) */}
				<div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
					<PriceCard
						title="Unidad"
						description="Si prefieres pagar tu sesión de manera semanal una a una, debes hacerlo con 24 h de anticipación"
						totalValue="$72.000"
						cta="Pagar"
					/>
				</div>

				{/* DUO (derecha fila 2) → deja hueco real */}
				<div className="lg:col-span-6 lg:col-start-7 lg:row-start-2">
					<PriceCard
						title="DUO"
						description="Si prefieres pagar 2 sesiones de manera quincenal te realizaremos un descuento."
						unitValue="$67.500"
						totalValue="$135.000"
						cta="Pagar"
					/>
				</div>

				{/* TETRA (izquierda fila 3) */}
				<div className="lg:col-span-6 lg:col-start-1 lg:row-start-3">
					<PriceCard
						title="TETRA"
						description="Si prefieres un paquete mensual que asegure tus 4 sesiones tendrás un descuento mayor."
						unitValue="$62.500"
						totalValue="$250.000"
						cta="Pagar"
					/>
				</div>
			</div>
		</MotionSection>
	)
}
