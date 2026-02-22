import IsoLogo from "./ui/svg/logos"

export default function Footer() {
	return (
		<footer className="w-full border-2 grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 min-h-20 bg-muted select-none mt-4 py-8 md:py-4">
			<span className="flex items-center justify-center">
				{new Date().getFullYear()} &copy; All Rights Reserved.
			</span>

			<div className="flex items-center justify-center text-center">
				<p>
					Build With <span className="text-2xl text-secondary">&#9825; </span>
					by&nbsp;
				</p>
				<a
					href="https://www.linkedin.com/in/john-santamaria-dev/"
					rel="noopener noreferrer"
					target="_blank"
					className="p-0 mt-2 text-secondary font-bold"
				>
					JohnS
				</a>
			</div>

			<div className="flex items-center justify-center mt-2">
				<IsoLogo className="w-auto h-8 " />
			</div>
		</footer>
	)
}
