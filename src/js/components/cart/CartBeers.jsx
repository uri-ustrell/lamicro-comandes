import React from "react";
import CartBeersWrapper from "../styles/CartBeersWrapper";
import CartBottle from "./CartBottle.jsx";

const CartBeers = ({
	beers,
	recycledBottles,
	handleRemoveBeer,
	handleRemoveRecycledBottle,
}) => {
	const bottles = beers.reduce((acc, curr) => {
		const filtered = acc.filter((b) => b.id !== curr.id);

		if (filtered.length < curr.length) {
			const currAmount = acc.find((b) => b.id === curr.id).amount;
			return [...filtered, { ...curr, amount: ++currAmount }];
		}

		return [...acc, { ...curr, amount: 1 }];
	}, []);
	return (
		<CartBeersWrapper>
			{bottles.map((b) => (
				<CartBottle bottle={b} onClick={() => handleRemoveBeer(b.id)} />
			))}
			{recycledBottles > 0 && (
				<CartBottle
					bottle={{
						amount: recycledBottles,
						name: "ampolla reciclada",
						color: "empty",
					}}
				/>
			)}
			<img
				src={`./bottle_empty`}
				alt="ampolla buida"
				onClick={() => handleRemoveRecycledBottle()}
			/>
		</CartBeersWrapper>
	);
};

export default CartBeers;
