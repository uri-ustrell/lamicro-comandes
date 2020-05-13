import React from "react";
import PhoneContact from "../styles/PhoneContact";
import CopyButton from "../shared/CopyButton.jsx";

const Contact = () => (
	<PhoneContact>
		<h2 style={{ fontSize: "16px" }}>La Microcervesaria</h2>
		<h3 style={{ fontSize: "14px" }}>699432572</h3>
		<CopyButton content="699432572" />
	</PhoneContact>
);

export default Contact;
