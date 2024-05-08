import React from 'react';
import styled from 'styled-components';
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";

export const Header = () => {
  return (
    <StyledHeader>
        <DesktopMenu/>
        <MobileMenu/>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  width: 100%;
  background-color: transparent;
  padding: 20px 0;
  
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 999;
`

