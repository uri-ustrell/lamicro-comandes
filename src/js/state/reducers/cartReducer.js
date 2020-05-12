import * as types from "../actions/actionTypes";
import initialState from "../initialState";

export const reducers = {
	[types.ADD_BEER_TO_CART]: (state, action) => {
		return {
			...state,
			selectedBeers: [...state.selectedBeers, action.beer],
		};
	},
	[types.ADD_RECYCLED_BOOTLE_TO_CART]: (state, action) => {
		return {
			...state,
			recycledBottles: ++recycledBottles,
		};
	},
	[types.REMOVE_BEER_FROM_CART]: (state, action) => {
		return {
			...state,
			selectedBeers: state.selectedBeers.filter((b) => b !== action.beer),
		};
	},
	[types.REMOVE_RECYCLED_BOOTLE_FROM_CART]: (state, action) => {
		return {
			...state,
			recycledBottles: --recycledBottles,
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
