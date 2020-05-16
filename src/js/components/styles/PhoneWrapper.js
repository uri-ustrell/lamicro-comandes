import styled from "styled-components";

const PhoneWrapper = styled.div`
	grid-area: phone;
	position: relative;
	width: 250px;
	height: 400px;
	margin-left: 10px;
	border: 16px black solid;
	border-top-width: 60px;
	border-bottom-width: 60px;
	border-radius: 36px;

	::before {
		content: "";
		display: block;
		width: 60px;
		height: 5px;
		position: absolute;
		top: -30px;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #333;
		border-radius: 10px;
	}

	::after {
		content: "";
		display: block;
		width: 35px;
		height: 35px;
		position: absolute;
		left: 50%;
		bottom: -65px;
		transform: translate(-50%, -50%);
		background: #333;
		border-radius: 50%;
	}

	@media only screen and (min-width: 768px) {
		margin-left: 20px;
	}
`;

export default PhoneWrapper;
