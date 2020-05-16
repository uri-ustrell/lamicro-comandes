import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root{
		--passive-color: transparent;
		--active-color: #FFB963;
		--text-main-color: #444;
		--text-write-color: #1d0ca5;
		--text-write-secondary-color: #777;
	}
	
	*{
		color: var(--text-main-color);
	}

	body {
		font-family: 'Roboto', sans-serif;
	}
`;

export default GlobalStyles;
