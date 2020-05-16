import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as cartActions from "../../state/actions/cartActions";
import CartWrapper from "../styles/CartWrapper";
import CartMinusSimbol from "../styles/CartMinusSymbol";
import CartEqualsSimbol from "../styles/CartEqualsSymbol";
import Cost from "./Cost.jsx";
import CartBeers from "./CartBeers.jsx";

const Cart = ({
	cost,
	selectedBeers,
	recycledBottles,
	removeBeerFromCart,
	removeRecycledBottleFromCart,
	beers,
	calculateCartPrice,
}) => {
	useEffect(() => {
		calculateCartPrice();
	}, [selectedBeers, recycledBottles, cost]);

	const cartBeers = selectedBeers.reduce(
		(acc, curr) => [...acc, beers.find((b) => b.id === curr)],
		[]
	);

	return (
		<CartWrapper>
			<CartBeers
				beers={cartBeers}
				recycledBottles={[]}
				handleRemoveBeer={removeBeerFromCart}
				handleRemoveRecycledBottle={removeRecycledBottleFromCart}
			/>
			<CartMinusSimbol />
			<CartBeers
				beers={[]}
				recycledBottles={recycledBottles}
				handleRemoveBeer={removeBeerFromCart}
				handleRemoveRecycledBottle={removeRecycledBottleFromCart}
			/>
			<CartEqualsSimbol>
				<CartMinusSimbol />
				<CartMinusSimbol />
			</CartEqualsSimbol>
			<Cost total={cost} />
		</CartWrapper>
	);
};

Cart.propTypes = {
	cost: PropTypes.number.isRequired,
	selectedBeers: PropTypes.array.isRequired,
	recycledBottles: PropTypes.number.isRequired,
	removeBeerFromCart: PropTypes.func.isRequired,
	removeRecycledBottleFromCart: PropTypes.func.isRequired,
	calculateCartPrice: PropTypes.func.isRequired,
};

const mapStateToProps = (state /* , ownProps */) => {
	return {
		cost: state.cart.cost,
		selectedBeers: state.cart.selectedBeers,
		recycledBottles: state.cart.recycledBottles,
		beers: state.form.beers,
	};
};

const mapDispatchToProps = {
	removeBeerFromCart: cartActions.removeBeerFromCart,
	removeRecycledBottleFromCart: cartActions.removeRecycledBottleFromCart,
	calculateCartPrice: cartActions.calculateCartPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
