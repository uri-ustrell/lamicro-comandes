import React from "react";
import BottleAmount from "../styles/BottleAmount";
import AddOrRemoveButton from "../styles/AddOrRemoveButton";

const CartBottle = ({ bottle, handleClick }) => (
	<div
		onClick={() => handleClick(bottle.id)}
		style={{ cursor: "pointer", position: "relative", margin: 5 }}
		title={bottle.name}
	>
		<AddOrRemoveButton>-</AddOrRemoveButton>
		<img src={`./bottle_${bottle.color}.png`} alt={bottle.name} height="70px" />
		{bottle.amount > 1 && <BottleAmount>{bottle.amount}</BottleAmount>}
		{/* <BeerTitle>{bottle.name}</BeerTitle> */}
	</div>
);

export default CartBottle;
