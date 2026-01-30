import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function NotFound() {
	return (
		<div className="flex flex-col items-center gap-4">
			<h1 className="text-2xl font-semibold">404</h1>
			<Button asChild>
				<Link to="/">Volver al inicio</Link>
			</Button>
		</div>
	)
}
