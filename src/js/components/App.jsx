import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import HomePage from "./homePage/HomePage.jsx";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route component={HomePage} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
