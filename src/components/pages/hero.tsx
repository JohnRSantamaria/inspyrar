import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

import IsoLogo from "../ui/svg/logos"
import HeroButton from "../ui/buttons/hero-button"

type HeroProps = {
	className?: string
	OnScheduling?: () => void
}

export default function Hero({ className, OnScheduling }: HeroProps) {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [oneShotMode, setOneShotMode] = useState(false)

	const playOnceWithSound = () => {
		const video = videoRef.current
		if (!video) return

		video.pause()
		video.currentTime = 0

		video.muted = false
		video.volume = 1

		video.loop = false

		video.play()
		setOneShotMode(true)
	}

	return (
		<>
			<IsoLogo className="lg:hidden w-auto h-14 md:h-16" />
			<div
				className={[
					"relative z-10 w-[min(420px,92vw)] aspect-9/16 rounded-2xl overflow-hidden shadow-xl ",
					className ?? "",
				].join(" ")}
			>
				<video
					ref={videoRef}
					className="h-full w-full object-cover"
					src="/videos/hero.mp4"
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
				/>

				<div className="absolute inset-0 bg-black/35" />

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-6"
				>
					<h2 className="md:hidden font-bold leading-tight">
						No necesitas tener todas las respuestas para empezar
					</h2>
					<p className="md:hidden mt-3 opacity-90">
						Un espacio seguro para entender lo que sientes, acompañado y a tu ritmo.
					</p>
					<div className="flex items-center justify-center gap-4">
						<HeroButton
							OnScheduling={OnScheduling}
							className="bg-red-950 mt-5 py-1.5 px-4 lg:hidden"
						/>
						{!oneShotMode && (
							<Button
								onClick={playOnceWithSound}
								variant="default"
								className="mt-5"
							>
								<span>🔊</span>
								<span className="hidden md:block"> Activar sonido</span>
							</Button>
						)}
					</div>
				</motion.div>
			</div>
		</>
	)
}
