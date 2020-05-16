import styled from "styled-components";

const PhoneScreen = styled.div`
	width: 250px;
	height: 400px;
	background: linear-gradient(45deg, #ffe6c7 45px, transparent 45px) 64px 64px,
		linear-gradient(
			45deg,
			#ffe6c7 45px,
			transparent 45px,
			transparent 91px,
			#fff 91px,
			#fff 135px,
			transparent 135px
		),
		linear-gradient(
			-45deg,
			#ffe6c7 23px,
			transparent 23px,
			transparent 68px,
			#ffe6c7 68px,
			#ffe6c7 113px,
			transparent 113px,
			transparent 158px,
			#ffe6c7 158px
		);
	background-color: #fff;
	background-size: 128px 128px;
`;

export default PhoneScreen;
