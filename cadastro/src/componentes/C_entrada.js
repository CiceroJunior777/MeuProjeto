import styled, { css } from "styled-components";

const Recebe = styled.input`
font-size: 15px;
border: 2px solid #3A3A3A69;
padding: 1.0em;
padding-right: 12.4em;
border-radius 6px;

${props => props.C_email && css`
margin-left: 7.6em;
margin-top: 18em;
padding: 1.0em;
padding-right: 12.4em;
`}

`

export default Recebe;