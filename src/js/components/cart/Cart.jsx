import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as cartActions from "../../state/actions/cartActions";
import CartWrapper from "../styles/CartWrapper";
import Cost from "./Cost.jsx";
import CartBeers from "./CartBeers.jsx";

const Cart = ({
	cost,
	selectedBeers,
	recycledBottles,
	removeBeerFromCart,
	removeRecycledBottleFromCart,
	beers,
}) => {
	const cartBeers = selectedBeers.reduce(
		(acc, curr) => [...acc, beers.find((b) => b.id === curr)],
		[]
	);
	return (
		<CartWrapper>
			<Cost total={cost} />
			<CartBeers
				beers={cartBeers}
				recycledBottles={recycledBottles}
				handleRemoveBeer={removeBeerFromCart}
				handleRemoveRecycledBottle={removeRecycledBottleFromCart}
			/>
		</CartWrapper>
	);
};

Cart.propTypes = {
	cost: PropTypes.number.isRequired,
	selectedBeers: PropTypes.array.isRequired,
	recycledBottles: PropTypes.number.isRequired,
	removeBeerFromCart: PropTypes.func.isRequired,
	removeRecycledBottleFromCart: PropTypes.func.isRequired,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
