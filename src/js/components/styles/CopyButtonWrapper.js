import styled from "styled-components";

const CopyButtonWrapper = styled.span`
	border-radius: 100%;
	width: ${({ small }) => (small ? "20px" : "50px")};
	height: ${({ small }) => (small ? "20px" : "50px")};
	font-size: ${({ small }) => (small ? "14px" : "")};
	display: inline-flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background-color: ${({ bgColor }) => bgColor};
	transform: rotate(-45deg);
	padding: 10px;
	position: ${({ overridePosition }) => (overridePosition ? "" : "absolute")};
	bottom: 10;
	right: -60;
	box-shadow: 1px 1px 5px #777;
`;

export default CopyButtonWrapper;
