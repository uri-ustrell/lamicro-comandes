import React from "react";
import MainWrapper from "../styles/MainWrapper";
import Form from "../form/Form.jsx";
import Cart from "../cart/Cart.jsx";
import Phone from "../phone/Phone.jsx";

const HomePage = () => {
	return (
		<MainWrapper>
			<Form />
			<Cart />
			<Phone />
		</MainWrapper>
	);
};

export default HomePage;
