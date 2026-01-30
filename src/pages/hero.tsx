import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

type HeroProps = {
	className?: string
}

export default function Hero({ className }: HeroProps) {
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
		<div
			className={[
				"relative z-10 w-[min(420px,92vw)] aspect-9/16 rounded-2xl overflow-hidden shadow-xl",
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
				<h1 className="text-3xl font-bold leading-tight">No tienes que estar bien para empezar.</h1>
				<p className="mt-3 text-base opacity-90">
					Un espacio seguro para entender lo que sientes, acompañado y a tu ritmo.
				</p>

				{!oneShotMode && (
					<Button
						onClick={playOnceWithSound}
						variant="secondary"
						className="mt-5"
					>
						🔊 Activar sonido
					</Button>
				)}
			</motion.div>
		</div>
	)
}
