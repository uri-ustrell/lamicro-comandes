import React from "react";
import PhoneContact from "../styles/PhoneContact";
import Logo from "../styles/PhoneLogo";
import CopyButton from "../shared/CopyButton.jsx";

const Contact = () => (
	<PhoneContact>
		<div
			style={{
				margin: 5,
				borderRadius: 50,
				background: "#fff",
				overflow: "hidden",
			}}
		>
			<Logo />
		</div>
		<div>
			<h2 style={{ fontSize: "16px", margin: 0, color: "#fff" }}>
				La Microcervesaria
			</h2>
			<h3 style={{ fontSize: "14px", margin: 0, color: "#e8e8e8" }}>
				699432572
			</h3>
		</div>
		<CopyButton content="699432572" available={true} hint="telf" />
	</PhoneContact>
);

export default Contact;
