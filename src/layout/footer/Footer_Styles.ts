import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 0.5);
  padding-bottom: 50px; 
    
  @media ${theme.media.mobile} {
      padding-bottom: 30px;
  }
`

export const S = {
    Footer
}