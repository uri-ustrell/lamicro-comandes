import React from "react";
import ButtonSelectorWrapper from "../styles/ButtonSelectorWrapper";
import Button from "../shared/Button.jsx";

const PaymentSelector = ({ methods, selected, setPayment }) => (
	<ButtonSelectorWrapper>
		{methods.map((method) => (
			<Button
				key={method.id}
				text={method.name}
				handleClick={() => setPayment(method.id)}
				isPressed={method.id === selected}
			/>
		))}
	</ButtonSelectorWrapper>
);

export default PaymentSelector;
