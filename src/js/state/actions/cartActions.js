import * as types from "./actionTypes";

export const addBeerToCart = (beer) => ({ type: types.ADD_BEER_TO_CART, beer });

export const removeBeerFromCart = (beer) => ({
	type: types.REMOVE_BEER_FROM_CART,
	beer,
});

export const addRecycledBottle = () => ({
	type: types.ADD_RECYCLED_BOOTLE_TO_CART,
});

export const removeRecycledBottleFromCart = () => ({
	type: types.REMOVE_RECYCLED_BOOTLE_FROM_CART,
});

export const calculateCartPrice = () => ({ type: types.CALCULATE_CART_PRICE });
