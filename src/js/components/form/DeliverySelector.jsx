import React from "react";

const DeliverySelector = ({ methods, selected, setDelivery }) => (
	<SelectorWrapper>
		{methods.map((method) => (
			<Button
				key={method.id}
				text={method.name}
				handleClick={setDelivery}
				isPressed={method.id === selected}
			/>
		))}
	</SelectorWrapper>
);

export default DeliverySelector;
