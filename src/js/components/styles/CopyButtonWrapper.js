import styled from "styled-components";

const CopyButtonWrapper = styled.div`
	border-radius: 100%;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background-color: lightGray;
	float: right;
	transform: rotate(-45deg);
	padding: 10px;
	position: absolute;
	bottom: 10;
	right: -60;
	box-shadow: 1px 1px 5px #777;
`;

export default CopyButtonWrapper;
