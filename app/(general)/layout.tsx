export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex flex-col items-center p-24">
			<span className="text-lg">Hello Root Layout</span>
			{children}
		</main>
	);
}
