import React from "react";
import MainWrapper from "../styles/MainWrapper";
import Form from "../form/Form";
import Cart from "../cart/Cart";
import Phone from "../phone/Phone";

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
