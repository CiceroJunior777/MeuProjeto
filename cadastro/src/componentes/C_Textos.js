import styled, { css } from "styled-components";

const Textos = styled.h1`
  font-size: 1.1em;
  color: #979797;
  margin-left: 6em;
  margin-bottom: 1px;

${props => props.texto1 && css`
font-size: 17px;
margin-left: 6em;
margin-top: 4em;
`}

${props => props.T_email && css`
margin-top: 4em;
color: #979797;
`}

${props => props.T_senha && css`
color: #979797;
`}

${props => props.R_senha && css`
font-size: 14px;
margin-left: 17.2em;
margin-top: 1.2em;
`}

${props => props.texto2 && css`
font-size: 14px;
margin-left: 17.2em;
margin-top: 3em;
`}

${props => props.T_registro && css`
font-size: 14px;
margin-left: 19.3em;  
color: #426484;
`}
`

export default Textos;