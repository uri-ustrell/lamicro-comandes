import styled from "styled-components";

const BeerButtonWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background: lightsalmon;
	border: 5px solid lightgray;
	border-radius: 15px;
	cursor: pointer;
	margin: 10px;

	&:hover {
		border-color: brown;
	}
`;

export default BeerButtonWrapper;
