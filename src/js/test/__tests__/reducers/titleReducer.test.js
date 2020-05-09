import { reducers } from "../../../state/reducers/titleReducer";
import * as types from "../../../state/actions/actionTypes";

describe("titleReducer", () => {
	let initialState;
	const action = {};

	beforeEach(() => {
		initialState = {
			titles: ["1", "2", "3"],
			selectedTitle: "0",
		};
	});

	it("CHANGE_TITLE should change current title", () => {
		const finalState = reducers[types.CHANGE_TITLE](initialState, action);
		expect(finalState.selectedTitle).not.toBe(initialState.selectedTitle);
	});

	it("CHANGE_TITLE should select title by sum to index in array of titles", () => {
		initialState.selectedTitle = "1";
		action.sum = 1;
		const finalState = reducers[types.CHANGE_TITLE](initialState, action);

		const initialIndex = initialState.titles.indexOf(
			initialState.selectedTitle
		);
		const finalIndex = initialState.titles.indexOf(finalState.selectedTitle);

		expect(finalIndex).toBe(initialIndex + action.sum);
	});

	it("GET_TITLES_SUCCESS should add titles to state", () => {
		initialState.titles = [];
		action.titles = ["1", "2", "3"];

		const finalState = reducers[types.GET_TITLES_SUCCESS](initialState, action);

		expect(finalState.titles).toEqual(action.titles);
	});
});
