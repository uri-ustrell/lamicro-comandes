import * as titleActions from "../../../state/actions/titleActions";
import * as types from "../../../state/actions/actionTypes";
import getAction from "../../utils/getAction";
import { mockStore } from "../../utils/mockStore";
import fetchMock from "fetch-mock";

describe("getTitlesSuccess", () => {
	const store = mockStore();

	it("andhandles success", async () => {
		const titles = [{}, {}];
		store.dispatch(titleActions.getTitlesSuccess(titles));

		expect(await getAction(store, "GET_TITLES_SUCCESS")).toEqual({
			type: types.GET_TITLES_SUCCESS,
			titles,
		});
	});
});

describe("getTitles", () => {
	const store = mockStore({ titles: [] });

	afterEach(() => {
		fetchMock.restore();
	});

	it("fetch titles and if success trigger getTitlesSuccess", async () => {
		fetchMock.getOnce("/titles", {
			body: { titles: ["do something"] },
			headers: { "content-type": "application/json" },
		});

		store.dispatch(titleActions.getTitles());

		expect(await getAction(store, "GET_TITLES_SUCCESS")).toEqual({
			type: types.GET_TITLES_SUCCESS,
			titles: ["do something"],
		});
	});
	it("fetch titles and if fails trigger getTitlesError", () => {});
});
