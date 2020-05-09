import { handleResponse, handleError } from "./apiResponseHandler";

export function getTitles() {
	return fetch("/titles").then(handleResponse).catch(handleError);
}
