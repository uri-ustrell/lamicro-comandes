import styled from "styled-components";

const CustomButton = styled.span`
	padding: 10px;
	font-size: 18px;
	text-decoration: ${({ active }) => (active ? "" : "line-through")};
	text-decoration-color: var(--text-write-color);
	color: ${({ active }) =>
		active ? "var(--text-write-color)" : "var(--text-write-secondary-color)"};
	background: transparent;
	border-radius: 5px;
	cursor: pointer;
	margin: 0 5px;
	border: none;
	-webkit-touch-callout: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
`;

export default CustomButton;
