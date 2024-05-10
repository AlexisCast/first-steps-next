import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact page",
	description: "This is the contact page of the business",
};

export default function ContactPage() {
	return (
		<>
			<span className="text-5xl">Contact Page</span>
		</>
	);
}
