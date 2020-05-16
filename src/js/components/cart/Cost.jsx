import React from "react";
import TotalCost from "../styles/TotalCost";
import CartBeersWrapper from "../styles/CartBeersWrapper";

const Cost = ({ total }) => (
	<CartBeersWrapper>
		<TotalCost>{total}€</TotalCost>
	</CartBeersWrapper>
);

export default Cost;
