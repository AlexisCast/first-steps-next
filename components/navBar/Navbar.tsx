import React from "react";

export const Navbar = () => {
	return (
		<nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
			<span className="m-2">Home</span>

			<div className="flex flex-1"></div>

			{/* TODO//will update navigation */}
			<a className="m-2" href="/about">
				About
			</a>
			<a className="m-2" href="/pricing">
				Pricing
			</a>
			<a className="m-2" href="/contact">
				Contact
			</a>
		</nav>
	);
};
