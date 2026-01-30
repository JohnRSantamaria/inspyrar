import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Button } from "@/components/ui/button"

const SECTIONS = ["home", "about", "contact"] as const
type SectionId = (typeof SECTIONS)[number]

function scrollTo(id: SectionId) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start",
	})
}

export default function Layout() {
	const [active, setActive] = useState<SectionId>("home")

	useEffect(() => {
		const elements = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

		if (!elements.length) return

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

				if (visible?.target?.id && SECTIONS.includes(visible.target.id as SectionId)) {
					setActive(visible.target.id as SectionId)
				}
			},
			{
				root: null,
				rootMargin: "-80px 0px -55% 0px",
				threshold: [0.15, 0.25, 0.35, 0.5, 0.7],
			}
		)

		elements.forEach((el) => observer.observe(el))
		return () => observer.disconnect()
	}, [])

	return (
		<div className="min-h-svh">
			<header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
				<div className="flex gap-2 p-4">
					<Button
						variant={active === "home" ? "default" : "ghost"}
						onClick={() => scrollTo("home")}
					>
						Inicio
					</Button>

					<Button
						variant={active === "about" ? "default" : "ghost"}
						onClick={() => scrollTo("about")}
					>
						Nosotros
					</Button>

					<Button
						variant={active === "contact" ? "default" : "ghost"}
						onClick={() => scrollTo("contact")}
					>
						Contacto
					</Button>
				</div>
			</header>

			<Outlet />
		</div>
	)
}
