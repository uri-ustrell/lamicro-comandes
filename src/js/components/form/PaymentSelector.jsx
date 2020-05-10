import React from "react";

const PaymentSelector = ({ methods, selected, setPayment }) => (
	<SelectorWrapper>
		{methods.map((method) => (
			<Button
				key={method.id}
				text={method.name}
				handleClick={setPayment}
				isPressed={method.id === selected}
			/>
		))}
	</SelectorWrapper>
);

export default PaymentSelector;
