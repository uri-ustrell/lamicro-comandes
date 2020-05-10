import React from "react";
import CustomButton from "../styles/CustomButton";

const Button = ({ handleClick, text, isPressed }) => (
	<CustomButton onClick={handleClick} active={isPressed}>
		{text}
	</CustomButton>
);

export default Button;
