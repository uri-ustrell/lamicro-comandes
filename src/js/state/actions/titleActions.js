import * as types from "./actionTypes";
import * as titleApi from "../../api/titleApi";

export function changeTitle() {
	return { type: types.CHANGE_TITLE, sum: 1 };
}

export function getTitlesSuccess(titles) {
	return { type: types.GET_TITLES_SUCCESS, titles };
}

export function getTitles() {
	return (dispatch) =>
		titleApi.getTitles().then((res) => dispatch(getTitlesSuccess(res.titles)));
}
