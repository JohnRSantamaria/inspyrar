export type PriceCardProps = {
	title: string
	description: string
	unitValue?: string
	totalValue: string
	cta?: string
	onCtaClick?: () => void
}
