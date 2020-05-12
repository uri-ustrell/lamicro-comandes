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

		if (filtered.length < acc.length) {
			const currAmount = acc.find((b) => b.id === curr.id).amount;
			return [...filtered, { ...curr, amount: currAmount + 1 }];
		}

		return [...acc, { ...curr, amount: 1 }];
	}, []);
	return (
		<CartBeersWrapper>
			{bottles.map((b) => (
				<CartBottle bottle={b} handleClick={handleRemoveBeer} key={b.id} />
			))}
			{recycledBottles > 0 && (
				<CartBottle
					bottle={{
						amount: recycledBottles,
						name: "ampolla reciclada",
						color: "empty",
						id: 0,
					}}
					handleClick={handleRemoveRecycledBottle}
				/>
			)}
		</CartBeersWrapper>
	);
};

export default CartBeers;
