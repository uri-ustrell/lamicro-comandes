import React from "react";
import BeerButtonWrapper from "../styles/BeerButtonWrapper";
import BeerTitle from "../styles/BeerTitle";
import BeerDescription from "../styles/BeerDescription";

const BeerButton = ({ name, description, color, handleClick, beerId }) => (
	<BeerButtonWrapper onClick={() => handleClick(beerId)}>
		<BeerTitle>{name}</BeerTitle>
		<img src={`./bottle_${color}`} alt={name} />
		<BeerDescription>{description}</BeerDescription>
	</BeerButtonWrapper>
);

export default BeerButton;
