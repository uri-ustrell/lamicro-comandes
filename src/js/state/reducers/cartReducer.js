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
			recycledBottles: state.recycledBottles + 1,
		};
	},
	[types.REMOVE_BEER_FROM_CART]: (state, action) => {
		const index = state.selectedBeers.indexOf(action.beer);
		return {
			...state,
			selectedBeers: [
				...state.selectedBeers.slice(0, index),
				...state.selectedBeers.slice(index + 1),
			],
		};
	},
	[types.REMOVE_RECYCLED_BOOTLE_FROM_CART]: (state, action) => {
		return {
			...state,
			recycledBottles: state.recycledBottles - 1,
		};
	},
	[types.CALCULATE_CART_PRICE]: (state, action) => {
		const amountBeers = state.selectedBeers.length;

		if (amountBeers < 2) return state;

		let price = 0;

		if (amountBeers === 2) {
			price = 11;
		} else if (amountBeers === 3) {
			price = 15;
		} else if (amountBeers > 3) {
			price = 15 + (amountBeers - 3) * 5;
		}

		price += 1.5 * amountBeers - 1.5 * state.recycledBottles;

		return { ...state, cost: price > 0 ? price : 0 };
	},
};

export const cartReducer = (state = initialState.cart, action) => {
	if (reducers.hasOwnProperty(action.type)) {
		return reducers[action.type](state, action);
	} else {
		return state;
	}
};
