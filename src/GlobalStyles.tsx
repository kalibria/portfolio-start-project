import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;;
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
  }
  
  
`

