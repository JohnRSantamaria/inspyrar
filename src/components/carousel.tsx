import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

type Slide = {
	id: string
	title: string
	description: string
	imageUrl: string
}

const itemVariants = {
	hidden: { opacity: 0, y: 16, scale: 0.98 },
	show: { opacity: 1, y: 0, scale: 1 },
}

export function MotionCarousel({ slides, className }: { slides: Slide[]; className?: string }) {
	return (
		<Carousel
			className={className}
			opts={{ align: "start", loop: true }}
			plugins={[
				Autoplay({
					delay: 4000,
					stopOnInteraction: true,
				}),
			]}
		>
			<CarouselContent>
				{slides.map((s) => (
					<CarouselItem
						key={s.id}
						className="md:basis-1/2  xl:basis-1/4"
					>
						<motion.div
							variants={itemVariants}
							initial="hidden"
							whileInView="show"
							viewport={{ amount: 0.4, once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="relative overflow-hidden rounded-2xl border bg-[#FFFCF5]"
						>
							{/* Imagen de fondo */}
							<div
								className="h-180 bg-cover bg-center"
								style={{ backgroundImage: `url(${s.imageUrl})` }}
							/>

							<div className="absolute top-20 inset-x-4 bg-background p-4 shadow-lg rounded-2xl rounded-tr-none">
								<h3 className="text-lg font-semibold">{s.title}</h3>
								<p className="mt-1 text-sm/relaxed opacity-95">{s.description}</p>
							</div>
						</motion.div>
					</CarouselItem>
				))}
			</CarouselContent>

			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
