import React from "react";
import ButtonSelectorWrapper from "../styles/ButtonSelectorWrapper";
import BeerButton from "./BeerButton.jsx";

const BeerSelector = ({ beers, addBeer, addEmptyBottle }) => (
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
		<BeerButton
			beerId={0}
			name="Ampolla reciclada"
			description="envàs de retorn (-1,5€)"
			color="empty"
			handleClick={addEmptyBottle}
		/>
	</ButtonSelectorWrapper>
);

export default BeerSelector;
