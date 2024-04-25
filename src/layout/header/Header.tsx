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
      <MyButton text={"Contact Me"} padding={"10px"}/>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
`

