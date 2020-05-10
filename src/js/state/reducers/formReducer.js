import * as types from "../actions/actionTypes";
import initialState from "../initialState";

export const reducers = {
	[types.CHOOSE_DELIVERY_METHOD]: (state, action) => {
		return {
			...state,
			selectedDelivery: action.selectedDelivery,
		};
	},
	[types.CHOOSE_PAYMENT_METHOD]: (state, action) => {
		return {
			...state,
			selectedPayment: action.selectedPayment,
		};
	},
	[types.CHOOSE_PICKUP_TIME]: (state, action) => {
		return {
			...state,
			selectedSchedule: action.selectedPayment,
		};
	},
	[types.INPUT_ADRESS]: (state, action) => {
		return {
			...state,
			adress: action.adress,
		};
	},
};

export const formReducer = (state = initialState, action) => {
	if (reducers.hasOwnProperty(action.type)) {
		return reducers[action.type](state, action);
	} else {
		return state;
	}
};
