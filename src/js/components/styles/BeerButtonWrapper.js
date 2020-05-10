import styled from "styled-components";

const BeerButtonWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background: lightsalmon;
	border: 5px solid lightgray;
	border-radius: 5px;

	&:hover {
		border-color: brown;
	}
`;

export default BeerButtonWrapper;
