import React from "react";
import BeerButtonWrapper from "../styles/BeerButtonWrapper";
import BeerTitle from "../styles/BeerTitle";
import BeerDescription from "../styles/BeerDescription";
import AddOrRemoveButton from "../styles/AddOrRemoveButton";

const BeerButton = ({ name, description, color, handleClick, beerId }) => (
	<BeerButtonWrapper onClick={() => handleClick(beerId)}>
		<BeerTitle>{name}</BeerTitle>
		<AddOrRemoveButton>+</AddOrRemoveButton>
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
