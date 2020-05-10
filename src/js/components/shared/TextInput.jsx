import React from "react";
import FormTextInput from "../styles/FormTextInput";

const TextInput = ({ value, setValue }) => (
	<FormTextInput value={value} onChange={(e) => setValue(e.target.value)} />
);

export default TextInput;
