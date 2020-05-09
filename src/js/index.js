import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Provider } from "react-redux";
import configureStore from "./state/configreStore";

const store = configureStore();

const wrapper = document.getElementById("root");
wrapper
	? ReactDOM.render(
			<Provider store={store}>
				<App />
				<GlobalStyles />
			</Provider>,
			wrapper
	  )
	: false;
