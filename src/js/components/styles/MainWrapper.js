import styled from "styled-components";

const MainWrapper = styled.div`
	margin: 25px auto;
	max-width: 850px;
	display: grid;
	grid-template-areas: "step1" "form" "cart" "step2" "phone" "step3";

	background-color: #fff;

	@media only screen and (min-width: 768px) {
		grid-template-areas: "step1 step2" "form phone" "form phone" "cart step3";
	}
`;

export default MainWrapper;
