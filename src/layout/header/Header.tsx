import React from 'react';
import {MyButton} from 'src/components/button/Button';
import styled from 'styled-components';
import {Menu} from 'src/components/menu/Menu';
import {Logo} from 'src/components/logo/Logo';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu/>
      <MyButton text={"Contact Me"} paddingTop={"10px"} paddingBottom={"10px"} paddingLeft={"20px"} paddingRight={"20px"}/>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1196px;
  margin: 0 auto;
  background-color: transparent;
  
  position: absolute;
  top:10px;
`

