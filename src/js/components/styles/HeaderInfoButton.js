import styled from "styled-components";

const HeaderInfoButton = styled.div`
	border: 3px solid var(--active-color);
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	width: 150px;
	height: 30px;
	padding: 10px;
	align-self: stretch;
	font-size: 18px;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background-color: var(--active-color);
	}
`;

export default HeaderInfoButton;
