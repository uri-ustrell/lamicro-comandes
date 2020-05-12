import React from "react";
import BeerTitle from "../styles/BeerTitle";
import BottleAmount from "../styles/BottleAmount";

const CartBottle = ({ bottle }) => (
	<div>
		<img src={`./bottle_${bottle.color}`} alt={bottle.name} />
		{bottle.amount > 1 && <BottleAmount>{bottle.amount}</BottleAmount>}
		<BeerTitle>{bottle.name}</BeerTitle>
	</div>
);

export default CartBottle;
