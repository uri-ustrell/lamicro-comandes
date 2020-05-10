import React from "react";
import ButtonSelectorWrapper from "../styles/ButtonSelectorWrapper";
import BeerButton from "./BeerButton.jsx";

const BeerSelector = ({ beers, addBeer }) => (
	<ButtonSelectorWrapper>
		{beers.map((beer) => (
			<BeerButton
				key={beer.id}
				name={beer.name}
				description={beer.description}
				color={beer.color}
				onClick={() => addBeer(beer.id)}
			/>
		))}
	</ButtonSelectorWrapper>
);

export default BeerSelector;
