import styled from "styled-components";

const FormWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: flex-start;
	grid-area: form;
	padding-left: 100px;
	border-right: 2px solid #eee;
	border-left: 2px solid #eee;

	background-image: linear-gradient(
			90deg,
			transparent 79px,
			#abced4 79px,
			#abced4 81px,
			transparent 81px
		),
		linear-gradient(#eee 0.1em, transparent 0.1em);
	background-size: 100% 1.2em;
	background-color: #f6fdff;
`;

export default FormWrapper;
