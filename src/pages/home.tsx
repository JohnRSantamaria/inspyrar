import About from "@/components/pages/about"
import FAQ from "@/components/pages/faq"
import Home from "@/components/pages/home"
import Services from "@/components/pages/services"
import WhoAreWe from "@/components/pages/who-are-we"

export default function Page() {
	return (
		<>
			<Home />
			<About />
			<WhoAreWe />
			<Services />
			{/* <Testimonies /> */}
			<FAQ />
		</>
	)
}
