import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { initialState as reducerInitialState } from "../../state/initialState";
import rootReducer from "../../state/reducers";

const render = (
	ui,
	{
		initialState = reducerInitialState,
		store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
		...renderOptions
	} = {}
) => {
	const Wrapper = ({ children }) => (
		<Provider store={store}>{children}</Provider>
	);

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export default render;
