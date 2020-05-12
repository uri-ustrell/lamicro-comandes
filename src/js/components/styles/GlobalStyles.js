import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	body {
		font-family: 'Roboto', sans-serif;
		background: rgb(255, 170, 0);
		background: linear-gradient(
			0deg,
			rgba(255, 170, 0, 1) 0%,
			rgba(255, 249, 236, 1) 83%,
			rgba(255, 255, 255, 1) 85%
		);
	}
`;

export default GlobalStyles;
