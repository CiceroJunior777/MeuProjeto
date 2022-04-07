import styled, { css } from 'styled-components';

const Button = styled.button`
display: flex;
background-color: blue;
color: white;
font-size: 15px;
padding: 1.0em 4em;
border-radius: 6px;
cursor: pointer;
border: 2px solid;

${props => props.B_login && css`
background: #426484;
color: white;
border: 2px solid #426484;
padding: 1.0em 11.9em; 
margin-left: 7.1em;
margin-top: 2em;
`}

${props => props.B_login_google && css`
background: white;
color: #979797;
border: 2px solid #3A3A3A69;
margin-left: 7em;
margin-top: 7px;
padding: 1.0em 8em;
`}
`
export default Button;