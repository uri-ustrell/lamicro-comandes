import React from "react";
import FormTextInput from "../styles/FormTextInput";
import ButtonSelectorWrapper from "../styles/ButtonSelectorWrapper";

const TextInput = ({ value, setValue }) => (
	<ButtonSelectorWrapper>
		<FormTextInput
			placeholder="escriu la teva adreça..."
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	</ButtonSelectorWrapper>
);

export default TextInput;
