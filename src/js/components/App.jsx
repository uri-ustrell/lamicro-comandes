import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./header/Header.jsx";
import HomePage from "./homePage/HomePage.jsx";
import SecondaryPage from "./secondaryPage/SecondaryPage.jsx";
import NotFoundPage from "./notFoundPage/NotFoundPage.jsx";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="/home" component={HomePage} exact />
				<Route path="/secondary" component={SecondaryPage} exact />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
