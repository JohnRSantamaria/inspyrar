import { Routes, Route } from "react-router-dom"
import Layout from "./layout"
import NotFound from "./pages/not-found"
import Page from "./pages/home"

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route
					path="/"
					element={<Page />}
				/>

				<Route
					path="*"
					element={<NotFound />}
				/>
			</Route>
		</Routes>
	)
}
