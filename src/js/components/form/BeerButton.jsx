import React from "react";
import BeerButtonWrapper from "../styles/BeerButtonWrapper";
import BeerTitle from "../styles/BeerTitle";
import BeerDescription from "../styles/BeerDescription";

const BeerButton = ({ name, description, color, handleClick, beerId }) => (
	<BeerButtonWrapper onClick={() => handleClick(beerId)}>
		<BeerTitle>{name}</BeerTitle>
		<img
			src={`./bottle_${color}.png`}
			alt={name}
			height="100px"
			style={imgStyle}
		/>
		<BeerDescription>{description}</BeerDescription>
	</BeerButtonWrapper>
);

const imgStyle = {
	position: "absolute",
	bottom: 0,
	left: -10,
};

export default BeerButton;
