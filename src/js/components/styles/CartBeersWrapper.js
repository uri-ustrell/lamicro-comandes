import styled from "styled-components";

const CartBeersWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: left;
	align-items: center;
	background-color: var(--passive-color);
	border-radius: 15px;
	min-height: 80px;
	min-width: 26px;

	@media only screen and (min-width: 768px) {
		border: 2px dashed var(--active-color);
		padding: 10px;
	}
`;

export default CartBeersWrapper;
