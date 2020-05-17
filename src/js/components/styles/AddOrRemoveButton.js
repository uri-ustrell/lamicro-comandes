import styled from "styled-components";

const AddOrRemoveButton = styled.span`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	background-color: #66e866;
	width: 15px;
	height: 15px;
	border-radius: 100%;
	font-weight: bold;
	font-size: 18px;
	position: ${({ overridePosition }) => (overridePosition ? "" : "absolute")};
	top: -10px;
	left: 9px;
	z-index: 1;
	box-shadow: 1px 1px 2px #777;
`;

export default AddOrRemoveButton;
