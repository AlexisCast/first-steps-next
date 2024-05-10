import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pricing page",
	description: "This is the page with the prices of my service",
};

export default function PricingPage() {
	return (
		<>
			<span className="text-5xl">Pricing Page</span>
		</>
	);
}
