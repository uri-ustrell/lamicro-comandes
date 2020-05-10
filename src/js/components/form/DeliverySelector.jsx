import React from "react";
import ButtonSelectorWrapper from "../styles/ButtonSelectorWrapper";
import Button from "../shared/Button.jsx";

const DeliverySelector = ({ methods, selected, setDelivery }) => (
	<ButtonSelectorWrapper>
		{methods.map((method) => (
			<Button
				key={method.id}
				text={method.name}
				handleClick={setDelivery}
				isPressed={method.id === selected}
			/>
		))}
	</ButtonSelectorWrapper>
);

export default DeliverySelector;
