import React from "react";
import MainWrapper from "../styles/MainWrapper";
import Form from "../form/Form.jsx";
import Cart from "../cart/Cart.jsx";
import Phone from "../phone/Phone.jsx";
import Step from "../shared/Step.jsx";

const HomePage = () => {
	return (
		<MainWrapper>
			<Step number={1} text="Prepara la comanda" />
			<Form />
			<Cart />
			<Step number={2} text="Copia el missatge" />
			<Phone />
			<Step number={3} text="Envia el missatge" />
		</MainWrapper>
	);
};

export default HomePage;
