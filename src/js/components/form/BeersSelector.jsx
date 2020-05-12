import React from "react";
import ButtonSelectorWrapper from "../styles/ButtonSelectorWrapper";
import BeerButton from "./BeerButton.jsx";

const BeerSelector = ({ beers, addBeer }) => (
	<ButtonSelectorWrapper>
		{beers.map((beer) => (
			<BeerButton
				key={beer.id}
				beerId={beer.id}
				name={beer.name}
				description={beer.description}
				color={beer.color}
				handleClick={addBeer}
			/>
		))}
	</ButtonSelectorWrapper>
);

export default BeerSelector;
