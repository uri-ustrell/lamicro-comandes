import styled from "styled-components";

const CustomButton = styled.button`
	padding: 10px;
	border: 2px solid grey;
	color: grey;
	background-color: ${({ active }) => active && "brown"};
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: lightgrey;
	}
`;

export default CustomButton;
