import styled, { css } from "styled-components";

const Input = styled.input`
font-size: 15px;
border: 2px solid #3A3A3A69;
padding: 1.0em;
width: 24.2em;
border-radius 6px;

${props => props.I_email && css`
margin-left: 7em;
`}

${props => props.I_senha && css`
margin-left: 7em;
margin-top: 1px;
`}

`

export default Input;