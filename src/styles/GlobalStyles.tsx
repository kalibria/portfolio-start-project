import {theme} from 'src/styles/Theme';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    color: ${theme.colors.primaryTextColor};
    line-height: 1.2;
  }
  
  *,
  *::before,
  *::after {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
  }
  
  li {
    text-decoration: none;
  }
  
  a {
    text-decoration: none;
    color: ${theme.colors.primaryTextColor};
  }
  
  button {
    background-color: unset;
    border: none;
    cursor:pointer
  }
  
  section:nth-of-type(odd){
    background-color: ${theme.colors.primaryColor};
  }
  section:nth-of-type(even){
    background-color: ${theme.colors.secondaryColor};
  }
`

