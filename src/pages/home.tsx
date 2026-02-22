import About from "@/components/pages/about"
import FAQ from "@/components/pages/faq"
import Home from "@/components/pages/home"
import Services from "@/components/pages/services"
import Testimonies from "@/components/pages/testimonies"

export default function Page() {
	return (
		<>
			<Home />
			<About />
			<Services />
			<Testimonies />
			<FAQ />
		</>
	)
}
