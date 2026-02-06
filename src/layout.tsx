import { Outlet } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"

export default function Layout() {
	return (
		<div className="min-h-svh">
			<main className="max-w-500 m-auto">
				<Header />
				<Outlet />
				<Footer />
			</main>
		</div>
	)
}
