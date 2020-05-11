import styled from "styled-components";

const CustomButton = styled.button`
	padding: 10px;
	border: 2px solid grey;
	color: white;
	background-color: ${({ active }) => active && "brown"};
	border-radius: 5px;
	cursor: pointer;
	margin: 0 5px;

	&:hover {
		border-color: brown;
	}
`;

export default CustomButton;
