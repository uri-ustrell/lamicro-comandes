import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ pages }) => {
	return (
		<nav>
			{pages.map((pg, i) => (
				<NavLink to={"/" + pg} exact key={i}>
					{pg}
				</NavLink>
			))}
		</nav>
	);
};

export default Menu;
