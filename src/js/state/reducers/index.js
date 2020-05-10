import { combineReducers } from "redux";
import { formReducer as form } from "./formReducer";
import { cartReducer as cart } from "./cartReducer";

const rootReducer = combineReducers({
	form,
	cart,
});

export default rootReducer;
