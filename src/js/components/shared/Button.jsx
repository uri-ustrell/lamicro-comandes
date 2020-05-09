import React from "react";
import CustomButton from "../styles/CustomButton";

const Button = ({ handleClick, text }) => (
	<CustomButton onClick={handleClick}>{text}</CustomButton>
);

export default Button;
