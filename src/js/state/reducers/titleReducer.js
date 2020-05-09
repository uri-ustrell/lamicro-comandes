import * as types from "../actions/actionTypes";
import initialState from "../initialState";

export const reducers = {
	[types.CHANGE_TITLE]: (state, action) => {
		const n = state.titles.indexOf(state.selectedTitle) + action.sum;
		return {
			...state,
			selectedTitle: state.titles[n >= state.titles.length ? 0 : n],
		};
	},
	[types.GET_TITLES_SUCCESS]: (state, action) => {
		return {
			...state,
			titles: action.titles,
		};
	},
};

export const titleReducer = (state = initialState, action) => {
	if (reducers.hasOwnProperty(action.type)) {
		return reducers[action.type](state, action);
	} else {
		return state;
	}
};
