import styled from "styled-components";

const BeerButtonWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: flex-start;
	background: var(--passive-color);
	border-radius: 15px;
	cursor: pointer;
	margin: 50px 10px 10px 10px;
	padding: 5px 10px;
	position: relative;

	&:hover {
		background: var(--active-color);
	}
`;

export default BeerButtonWrapper;
