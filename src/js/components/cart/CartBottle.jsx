import React from "react";
import BeerTitle from "../styles/BeerTitle";
import BottleAmount from "../styles/BottleAmount";

const CartBottle = ({ bottle, handleClick }) => (
	<div
		onClick={() => handleClick(bottle.id)}
		style={{ cursor: "pointer", position: "relative", margin: 5 }}
		title={bottle.name}
	>
		<img
			src={`./bottle_${bottle.color}.png`}
			alt={bottle.name}
			height="70px"
		/>
		{bottle.amount > 1 && <BottleAmount>{bottle.amount}</BottleAmount>}
		{/* <BeerTitle>{bottle.name}</BeerTitle> */}
	</div>
);

export default CartBottle;
