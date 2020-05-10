import * as types from "../actions/actionTypes";
import initialState from "../initialState";

export const reducers = {
	[types.ADD_BEER_TO_CART]: (state, action) => {
		return {
			...state,
			beers: [...state.beers, action.beer],
		};
	},
	[types.ADD_RECYCLED_BOOTLE_TO_CART]: (state, action) => {
		return {
			...state,
			recycledBottles: ++recycledBottles,
		};
	},
};

export const cartReducer = (state = initialState.cart, action) => {
	if (reducers.hasOwnProperty(action.type)) {
		return reducers[action.type](state, action);
	} else {
		return state;
	}
};
