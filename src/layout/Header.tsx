import React from 'react';
import styled from 'styled-components';
import {Menu} from '../components/menu/Menu';
import {Logo} from '../components/logo/Logo';
// import {StyledHeader} from './StyledHeader';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu/>
      <button>Contact Me</button>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
`

