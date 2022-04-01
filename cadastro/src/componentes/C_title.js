import styled, { css } from "styled-components";

const Title = styled.h1`
  font-size: 1.1em;
  color: #979797;
  margin-left: 8em;
  margin-bottom: 2px;

${props => props.email && css`
margin-top: 8em;
color: #979797;
`}

${props => props.senha && css`
color: #979797;
`}
`

export default Title;