import { combineReducers } from "redux";
import { titleReducer as title } from "./titleReducer";

const rootReducer = combineReducers({
	title,
});

export default rootReducer;
