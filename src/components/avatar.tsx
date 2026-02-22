import { cn } from "@/lib/utils"
type AvatarPros = {
	className?: string
}

export default function Avatar({ className }: AvatarPros) {
	return (
		<div className={cn("md:text-lg", className)}>
			<div className="relative w-[min(420px,92vw)] h-180  rounded-2xl overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: "url('/assets/avatar.webp')" }}
				/>
				<div className="absolute inset-0 bg-black/20" />
				<div className="absolute inset-0 flex flex-col gap-4 justify-end p-6 text-white bg-linear-to-t from-black/50 to-transparent">
					<h2 className="md:text-xl">Soy Paula Chocontá Cardozo, Psicóloga y fundadora de INSPYRAR. </h2>
					<p>
						Mi propósito es ser voz y espacio donde la salud mental florece, el estigma se desvanece y la
						vida recupera sentido
					</p>
				</div>
			</div>
		</div>
	)
}
