import * as types from "./actionTypes";

export const addBeerToCart = (beer) => ({ type: types.ADD_BEER_TO_CART, beer });

export const addRecycledBottles = () => ({
	type: types.ADD_RECYCLED_BOOTLE_TO_CART,
});
