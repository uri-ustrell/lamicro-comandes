import styled from "styled-components";

const CartBeersWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: left;
	align-items: center;
	background-color: var(--passive-color);
	padding: 10px;
	border: 2px dashed var(--active-color);
	border-radius: 15px;
	min-height: 80px;
	min-width: 26px;
`;

export default CartBeersWrapper;
