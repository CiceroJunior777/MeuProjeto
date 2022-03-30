import styled, { css } from 'styled-components';

export const Button = styled.button`
background-color: blue;
color: white;
font-size: 15px;
padding: 5.0px 30px;
border-radius: 20px;
cursor: pointer;
border: blue;

${props => props.B_login && css`
background: blue;
color: white;
margin-top: 400px;
margin-left: 30px;
`}

${props => props.B_novocad && css`
background: blue;
color: white;
margin-left: 950px;
`}


`
