import React from "react";
import StepWrapper from "../styles/StepWrapper";
import StepNumber from "../styles/StepNumber";
import StepText from "../styles/StepText";

const Step = ({ number, text }) => (
	<StepWrapper gridArea={number}>
		<StepNumber>{number}.</StepNumber> <StepText>{text}</StepText>
	</StepWrapper>
);

export default Step;
