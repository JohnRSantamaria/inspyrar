import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function About() {
	const navigate = useNavigate()

	return (
		<div className="flex flex-col items-center gap-4">
			<h1 className="text-3xl font-bold">About</h1>
			<Button
				variant="outline"
				onClick={() => navigate("/")}
			>
				Volver
			</Button>
		</div>
	)
}
