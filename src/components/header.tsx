import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

import { FaTiktok, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa"

const SECTIONS = ["home", "about", "price"] as const
type SectionId = (typeof SECTIONS)[number]

const NAV_ITEMS = [
	{ id: "home" as SectionId, label: "Inicio" },
	{ id: "about" as SectionId, label: "Nosotros" },
	{ id: "price" as SectionId, label: "Costos" },
]

function scrollTo(id: SectionId) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start",
	})
}
export default function Header() {
	const [active, setActive] = useState<SectionId>("home")
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

	const handleNavClick = (id: SectionId) => {
		scrollTo(id)
		setMobileMenuOpen(false)
	}
	return (
		<header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="shrink-0 flex gap-4">
						<a
							href="https://www.tiktok.com/@inspyrar_"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="ir a tiktok"
						>
							<FaTiktok className="icons" />
						</a>
						<a
							href="https://www.facebook.com/share/1FNcHGXjCf/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="ir a Facebook"
						>
							<FaFacebook className="icons" />
						</a>
						<a
							href="https://www.instagram.com/inspyrar_"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="ir a Instragram"
						>
							<FaInstagram className="icons" />
						</a>
						<a
							href="mailto:inspyrarpsicologia@gmail.com"
							aria-label="Enviar correo"
						>
							<FaEnvelope className="icons" />
						</a>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex gap-2">
						{NAV_ITEMS.map((item) => (
							<Button
								key={item.id}
								variant={active === item.id ? "default" : "ghost"}
								onClick={() => handleNavClick(item.id)}
							>
								{item.label}
							</Button>
						))}
					</nav>

					{/* Mobile Menu */}
					<Sheet
						open={mobileMenuOpen}
						onOpenChange={setMobileMenuOpen}
					>
						<SheetTrigger
							asChild
							className="md:hidden"
						>
							<Button
								variant="ghost"
								size="icon"
							>
								<Menu className="h-6 w-6" />
								<span className="sr-only">Abrir menú</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-64"
						>
							<nav className="flex flex-col gap-4 mt-8">
								{NAV_ITEMS.map((item) => (
									<Button
										key={item.id}
										variant={active === item.id ? "default" : "ghost"}
										onClick={() => handleNavClick(item.id)}
										className="justify-start text-lg"
									>
										{item.label}
									</Button>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
