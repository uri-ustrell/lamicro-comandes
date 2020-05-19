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
		overflow-x: hidden;
	}

	b.active {
		color: var(--active-color);
		font-size:1.2em
	}
	
	span.block-text {
		display: inline-block;
		border: 2px solid var(--active-color);
		padding: 5px;
		margin: 5px;
	}
`;

export default GlobalStyles;
