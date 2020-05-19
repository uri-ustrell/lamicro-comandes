import styled from "styled-components";

const StepWrapper = styled.div`
grid-area: "step${({ gridArea }) => gridArea}";
margin-top: 15px;
margin-bottom: 5px;
padding: 0 10px;

`;

export default StepWrapper;
