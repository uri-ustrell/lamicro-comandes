import styled from "styled-components";

const MainWrapper = styled.div`
	margin: 25px auto;
	max-width: 850px;
	padding: 10px;
	display: grid;
	grid-template-areas: "form" "cart" "phone";

	background-color: #fff;

	@media (min-width: 768px) {
		grid-template-areas: "form phone" "cart phone";
	}
`;

export default MainWrapper;
