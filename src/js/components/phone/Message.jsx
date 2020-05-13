import React from "react";
import PhoneText from "../styles/PhoneText";
import CopyButton from "../shared/CopyButton.jsx"

const Message = ({ info }) => (
	<div>
		<PhoneText>{`
Hola, blah blah per 100€ 
`}</PhoneText>
		<CopyButton content="100€" />
	</div>
);

export default Message;
