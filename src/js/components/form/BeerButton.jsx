import React from "react";
import BeerButtonWrapper from "../styles/BeerButtonWrapper";
import BeerTitle from "../styles/BeerTitle";
import BeerDescription from "../styles/BeerDescription";

const BeerButton = ({ name, description, color }) => (
	<BeerButtonWrapper>
		<BeerTitle>{name}</BeerTitle>
		<img src={`./bottle_${color}`} alt={`ampolla de color ${color}`} />
		<BeerDescription>{description}</BeerDescription>
	</BeerButtonWrapper>
);

export default BeerButton;
