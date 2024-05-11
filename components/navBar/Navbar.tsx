import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { text } from "stream/consumers";

const navItems = [
	{ path: "/about", text: "About" },
	{ path: "/pricing", text: "Pricing" },
	{ path: "/contact", text: "Contact" },
];

export const Navbar = () => {
	return (
		<nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
			<Link className="flex items-center" href={"/"}>
				<HomeIcon className="m-2" />
				<span>Home</span>
			</Link>

			<div className="flex flex-1"></div>

			{navItems.map((item) => (
				<Link key={item.text} className="m-2" href={item.path}>
					{item.text}
				</Link>
			))}
		</nav>
	);
};
